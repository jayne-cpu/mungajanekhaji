word = input("Enter a word: ")

letter_dict = {}

for index, char in enumerate(word):
    if char in letter_dict:
        letter_dict[char].append(index)
    else:
        letter_dict[char] = [index]

print(letter_dict)
