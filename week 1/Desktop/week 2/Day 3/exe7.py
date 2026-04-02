#Install the faker module and use it to create a list of dictionaries, where each dictionary represents a user with fake data.
from faker import Faker 
#install the faker module
fake = Faker()  # Create a Faker instance
#import the faker module
#create an empty list of users
users = []
#create a function to add users
def add_user():
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    users.append(user)
    #call the function and print the users list
for _ in range(5):  # Add 5 users
    add_user()
print(users)
