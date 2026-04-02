class Text:
    def __init__(self, text):
        self.text = text

    # Step 2: Word frequency
    def word_frequency(self, word):
        words = self.text.lower().split()
        count = words.count(word.lower())
        
        if count == 0:
            return None
        return count

    # Step 3: Most common word
    def most_common_word(self):
        words = self.text.lower().split()
        freq = {}

        for w in words:
            freq[w] = freq.get(w, 0) + 1

        # Find max frequency
        most_common = max(freq, key=freq.get)
        return most_common

    # Step 4: Unique words
    def unique_words(self):
        words = self.text.lower().split()
        return list(set(words))

    # Step 5: Class method from file
    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r") as file:
            content = file.read()
        return cls(content)