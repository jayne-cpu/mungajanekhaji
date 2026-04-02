#Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
fruits = input("Please enter your favorite fruits (separated by spaces): ") 
#Store these fruits in a list.
fruits_list = fruits.split()
#Ask the user to input the name of any fruit.
fruit_name = input("Please enter the name of a fruit: ")
#Check if the fruit they entered is in the list of their favorite fruits. If it is, print "You really like [fruit]!" If it is not, print "You don't like [fruit] as much as your other fruits."
if fruit_name in fruits_list:
    print(f"You really like {fruit_name}!")
else:
    print(f"You don't like {fruit_name} as much as your other fruits.")