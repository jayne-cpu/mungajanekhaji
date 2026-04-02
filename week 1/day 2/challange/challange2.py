# Step 1: Get user input
word = input("Enter a word: ")

# Step 2: Start with first character
result = word[0]

# Step 3: Loop through the rest of the string
for char in word[1:]:
    if char != result[-1]:
        result += char

# Step 4: Print result
print(result)
