#Write a loop that asks the user to enter pizza toppings one by one.
while True:
    topping = input("Please enter a pizza topping (or 'quit' to finish): ")
    if topping == 'quit':
        break
    print(f"Adding {topping} to your pizza!")
#Stop the loop when the user types 'quit'.
print("Your pizza is ready!")
#For each topping entered, print:
print("Adding [topping] to your pizza.")
#After exiting the loop, print all the toppings and the total cost of the pizza.
#The base price is $10, and each topping adds $2.50.
base_price = 10
toppings = []
while True:
    topping = input("Please enter a pizza topping (or 'quit' to finish): ")
    if topping == 'quit':
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza!")
total_cost = base_price + len(toppings) * 2.5
print("Your pizza is ready!")
print(f"Toppings: {', '.join(toppings)}")
print(f"Total cost: ${total_cost:.2f}")

