import random

# Step 1: Read words from file
def get_words_from_file(file_path):
    try:
        with open(file_path, "r") as file:
            content = file.read()
            words = content.split()
            return words
    except FileNotFoundError:
        print("Error: File not found.")
        return []

# Step 2: Generate random sentence
def get_random_sentence(length):
    words = get_words_from_file("words.txt")  # make sure file exists
    
    if not words:
        return "No words available."

    sentence = []

    for _ in range(length):
        sentence.append(random.choice(words))

    return " ".join(sentence).lower()

# Step 3: Main function
def main():
    print("This program generates a random sentence from a word list.")

    user_input = input("Enter sentence length (2–20): ")

    try:
        length = int(user_input)

        if length < 2 or length > 20:
            print("Error: Number must be between 2 and 20.")
            return

        sentence = get_random_sentence(length)
        print("Generated sentence:")
        print(sentence)

    except ValueError:
        print("Error: Please enter a valid integer.")

# Run program
main()
