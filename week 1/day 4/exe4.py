#Create a function that generates random numbers and compares them.
#Key Python Topics: random module, comparison operators, conditional statements
#If they are the same, print a success message. Otherwise, print a fail message and display both numbers.
#Call the function with a number between 1 and 100.
# Expected Output:Success! (if the numbers match), Fail! Your number: 50, Random number: 23 (if they don't match)   
import random
def compare_random_number(user_number):
    random_number = random.randint(1, 100)
    if user_number == random_number:
        print("Success! The numbers match.")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")
# Call the function with a number between 1 and 100
compare_random_number(50)
compare_random_number(23)
compare_random_number(75)

