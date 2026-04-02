# Create the Person Class with first_name, age, last_name, add a method called is_18(), it should return true if the person is 18 or older, and false if they are younger than 18.
from ast import If


from ast import If


class Person:
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def is_18(self):
        return self.age >= 18
    #create the family class with a last_name and members list that will store person objects
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def add_member(self, person):
        if isinstance(person, Person):
            self.members.append(person)
        else:
            print("Only Person instances can be added as family members.")

    def is_family_adult(self):
        return any(member.is_18() for member in self.members)
    #Add a method called born(first_name, age):
    def born(self, first_name, age):
        new_member = Person(first_name, self.last_name, age)
        self.add_member(new_member)
        return f"{first_name} {self.last_name} was born and added to the family."
   
    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(f"You are over 18, your parents {self.last_name} accept that you will go out with your friends.")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print(f"No family member named {first_name} found.")
        
    def family_presentation(self):
        print(f"Family {self.last_name}:")
        for member in self.members:
            print(f"{member.first_name}, Age: {member.age}")    


my_family = Family("Smith")
print(my_family.born("Alice", 30))
my_family.family_presentation()
print(my_family.born("Bob", 15))
my_family.family_presentation() 
my_family.check_majority("Alice")
my_family.check_majority("Bob")

