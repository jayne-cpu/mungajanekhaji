#Use the provided Pets and Cat classes to create a Siamese breed, instantiate cat objects, and use the Pets class to manage them.
class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())
class Cat:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def walk(self):
        return f"{self.name} the {self.breed} cat is walking."
# Create Siamese breed
class Siamese(Cat):
    def __init__(self, name):
        super().__init__(name, "Siamese")   
        #create a list of cats instances
cat1 = Siamese("Luna")
cat2 = Siamese("Simba")
# Create a Pets instance with the list of cats
my_pets = Pets([cat1, cat2])
#take the cats for a walk
my_pets.walk()
