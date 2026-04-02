#Create a Zoo class to manage animals. The class should allow adding animals, displaying them, selling them, and organizing them into alphabetical groups.
class Zoo:
    def __init__(self):
        self.animals = []

    def add_animal(self, animal_name):
        self.animals.append(animal_name)

    def display_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_name):
        if animal_name in self.animals:
            self.animals.remove(animal_name)
            print(f"{animal_name} has been sold.")
        else:
            print(f"{animal_name} is not in the zoo.")

    def organize_animals(self):
        organized = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in organized:
                organized[first_letter] = []
            organized[first_letter].append(animal)
        return organized


