#Challenge: Sort Words in Alphabetical Order
#If the input is without,hello,bag,world, the output should be bag,hello,without,world.
# Get input from the user
input_string = input("Enter a list of words separated by commas: ")
# Split the input string into a list of words
words_list = input_string.split(",")
# Sort the list of words in alphabetical order
sorted_words = sorted(words_list)
# Join the sorted list of words back into a string
output_string = ",".join(sorted_words)
# Print the resulting comma-separated string
print(output_string)


