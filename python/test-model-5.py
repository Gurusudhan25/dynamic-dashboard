from transformers import pipeline

pipe = pipeline("text-classification", model="Tititun/consumer_category")

input_text = "projectName consultingScore npsScore memberName surveyStatus surveyCompletedOn"
generated_text = pipe(input_text)

# Print the generated text
print(generated_text)