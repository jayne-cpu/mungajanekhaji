def longest_word(sentence):
    words = sentence.split()
    longest = ""
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest

input_sentence = input("Enter a sentence: ")

result = longest_word(input_sentence)
print("The longest word is:", result)
