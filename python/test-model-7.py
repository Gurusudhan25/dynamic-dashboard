from transformers import pipeline

pipe = pipeline("text2text-generation", model="czearing/article-title-generator")

# Example usage of the pipeline
input_text = "projectName consultingScore npsScore memberName surveyStatus surveyCompletedOn"
generated_text = pipe(input_text)

# Print the generated text
print(generated_text)