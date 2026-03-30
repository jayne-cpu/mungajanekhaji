class AnagramChecker:
    def __init__(self, file_path):
        """Load the word list into a set (lowercase)"""
        with open(file_path, 'r') as file:
            self.word_list = set(word.strip().lower() for word in file)

    def is_valid_word(self, word):
        """Check if word exists in word list"""
        return word.lower() in self.word_list

    def is_anagram(self, word1, word2):
        """Check if two words are anagrams"""
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        """Return list of anagrams (excluding the word itself)"""
        word = word.lower()
        anagrams = []

        for w in self.word_list:
            if w != word and self.is_anagram(word, w):
                anagrams.append(w)

        return anagrams