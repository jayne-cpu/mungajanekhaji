#Create a Dog class with methods for barking, running speed, and fighting.
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        return "Woof!"
    def run_speed(self):
        return f"{self.name} runs at 20 mph."
    def fight(self, other_dog):
        if self.run_speed() > other_dog.run_speed():
            return f"{self.name} wins the fight!"
        elif self.run_speed() < other_dog.run_speed():
            return f"{other_dog.name} wins the fight!"
        else:
            return "It's a tie!"
# Create dog instances
dog1 = Dog("Buddy", "Golden Retriever")
dog2 = Dog("Max", "German Shepherd")
# Test the methods
print(dog1.bark())
print(dog1.run_speed())
print(dog1.fight(dog2))
