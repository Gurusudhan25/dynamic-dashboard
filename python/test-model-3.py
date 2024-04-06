import json
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

# Sample data
data = [
    {"text": "The patient underwent surgery to remove the tumor."},
    {"text": "The new drug showed promising results in clinical trials."},
    {"text": "I enjoy playing tennis in my free time."},
    {"text": "The basketball team won the championship."},
    {"text": "We're hiring a new HR manager."},
    {"text": "Employee performance evaluations are due next week."}
]

# Extract texts
X_train = [item['text'] for item in data]

# Extract keywords for categories
medical_keywords = ["surgery", "drug", "clinical", "patient", "tumor"]
sports_keywords = ["tennis", "basketball", "championship"]
hr_management_keywords = ["hiring", "manager", "employee", "performance", "evaluations"]

# Function to determine category based on keywords
def get_category(text):
    if any(keyword in text for keyword in medical_keywords):
        return "Medical"
    elif any(keyword in text for keyword in sports_keywords):
        return "Sports"
    elif any(keyword in text for keyword in hr_management_keywords):
        return "HR Management"
    else:
        return "Uncategorized"

# Labels: 1 for medical-related, 2 for sports-related, 3 for HR management-related
y_train = np.array([1 if get_category(text) == 'Medical' else 2 if get_category(text) == 'Sports' else 3 for text in X_train])

# Create a pipeline with TF-IDF vectorizer and Support Vector Machine classifier
model = make_pipeline(
    TfidfVectorizer(),
    StandardScaler(with_mean=False),
    SVC(kernel="linear", probability=True)
)

# Train the model
model.fit(X_train, y_train)

# Test the model
def predict(input_text):
    prediction = model.predict([input_text])[0]
    if prediction == 1:
        return "Medical"
    elif prediction == 2:
        return "Sports"
    else:
        return "HR Management"

# Test the model with some examples
input_text = "We're looking for a new soccer coach."
print("Input:", input_text)
print("Prediction:", predict(input_text))

input_text = "The company is implementing a new healthcare plan."
print("\nInput:", input_text)
print("Prediction:", predict(input_text))