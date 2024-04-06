# Importing the pipeline function from the transformers library
from transformers import pipeline

# Creating a pipeline for text generation
pipe = pipeline("text2text-generation", model="ilsilfverskiold/tech-keywords-extractor")



# Example usage of the pipeline
input_text = "This is a sample text about technology and AI."
generated_text = pipe(input_text)

# Print the generated text
print(generated_text)