#Write code that asks the user for a number and determines whether this number is odd or even.
number = int(input("Please enter a number: "))
if number % 2 == 0:
    print(f"{number} is an even number.")  
else:
    print(f"{number} is an odd number.")
    