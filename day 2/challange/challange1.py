# Step 1: Get user input
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

# Step 2: Create empty list
multiples = []

# Step 3: Generate multiples
for i in range(1, length + 1):
    multiples.append(number * i)

# Step 4: Print result
print(multiples)
