import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np

# Example input data with keywords
input_strings = [
    "How to bake a cake",                       # Cooking
    "Introduction to machine learning",         # Machine Learning
    "Python programming basics",                # Programming
    "The art of storytelling",                  # Storytelling
    "Data analysis techniques",                  # Data Analysis
    "Four six runout",                          # Cricket
    "Goal penalty"                              # Football
]

# Corresponding titles
titles = [
    "Baking a Cake 101",
    "Getting Started with Machine Learning",
    "Python Programming for Beginners",
    "Mastering the Art of Storytelling",
    "Advanced Data Analysis Methods",
    "Cricket Techniques",
    "Football Strategies"
]

# Tokenize input strings
tokenizer = Tokenizer()
tokenizer.fit_on_texts(input_strings)
vocab_size = len(tokenizer.word_index) + 1

# Convert text data to sequences
sequences = tokenizer.texts_to_sequences(input_strings)
max_seq_length = max(len(seq) for seq in sequences)
padded_sequences = pad_sequences(sequences, maxlen=max_seq_length, padding='post')

# Convert titles to one-hot encoded vectors
title_labels = np.zeros((len(titles), vocab_size))
for i, title in enumerate(titles):
    title_seq = tokenizer.texts_to_sequences([title])[0]
    title_labels[i, title_seq] = 1

# Define the model architecture
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(input_dim=vocab_size, output_dim=64, input_length=max_seq_length),
    tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(64)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(vocab_size, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
history = model.fit(padded_sequences, title_labels, epochs=10, batch_size=1, validation_split=0.2)

# Evaluate the model
loss, accuracy = model.evaluate(padded_sequences, title_labels)
print("Model Accuracy:", accuracy)

# Example new input strings
new_input_strings = [
    "Four six runout",   # Expected: "Cricket Techniques"
    "Goal penalty"       # Expected: "Football Strategies"
]

# Tokenize and pad the new input strings
new_sequences = tokenizer.texts_to_sequences(new_input_strings)
padded_new_sequences = pad_sequences(new_sequences, maxlen=max_seq_length, padding='post')

# Predict the titles for the new input strings
predicted_title_probabilities = model.predict(padded_new_sequences)

# Get the predicted titles
for i, probs in enumerate(predicted_title_probabilities):
    predicted_title_index = np.argmax(probs)
    predicted_title = list(tokenizer.word_index.keys())[list(tokenizer.word_index.values()).index(predicted_title_index)]
    print(f"Input: {new_input_strings[i]}, Predicted Title: {predicted_title}")