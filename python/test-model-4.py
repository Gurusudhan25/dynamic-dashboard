from transformers import pipeline
pipe = pipeline("text2text-generation", model="KeLiu/Title-Gen")
input_text = 'four six wicket runout'
generated_text = pipe(input_text)
print(generated_text)