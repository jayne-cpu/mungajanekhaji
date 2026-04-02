#Use an input to ask the user to enter their name.
name = input("Please enter your name: ")
print(f"Hello, {name}!")

# Using a while True loop, check if the user gave a proper name (not digits and at least 3 letters long).
# If not, ask them to enter their name again.
while True:
    if name.isalpha() and len(name) >= 3:
        print(f"Welcome, {name}!")
        break

    if name.isdigit():
        print("Name cannot contain digits. Please try again.")
    else:
        print("Invalid name. Please enter a valid name (at least 3 letters and no digits).")

    name = input("Please enter your name: ")

# Once the user has entered a valid name, print a "thank you" and break the loop.
print("Thank you!")



       