# Create a PetDog class that inherits from Dog and adds training and tricks.
from random import choice
from dogs import Dog

tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]

class PetDog(Dog):
    def __init__(self, name, breed):
        super().__init__(name, breed)
        self.trained = False

    def train(self):
        self.trained = True
        return f"{self.name} is now trained."

    def do_a_trick(self):
        if self.trained:
            return f"{self.name} {choice(tricks)}"
        return f"{self.name} is not trained yet."

# Create a PetDog instance
pet_dog1 = PetDog("Charlie", "Labrador")
# Train the dog and make it do a trick
print(pet_dog1.train())
print(pet_dog1.do_a_trick())
# Implement a play(*args) method that prints "<dog_names> all play together!" where <dog_names> is a list of dog names. *args on this method is a list of dog instances. Use the PetDog class to create a few dog instances.

def play(*args):
    dog_names = [dog.name for dog in args]
    return f"{', '.join(dog_names)} all play together!"

pet_dog2 = PetDog("Bella", "Golden Retriever")
pet_dog3 = PetDog("Rocky", "German Shepherd")

print(play(pet_dog1, pet_dog2, pet_dog3))

# Test the PetDog class with random trick selection
print(pet_dog1.train())
print(pet_dog1.do_a_trick())
print(pet_dog2.train())
print(pet_dog2.do_a_trick())
print(pet_dog3.train())
print(pet_dog3.do_a_trick())
