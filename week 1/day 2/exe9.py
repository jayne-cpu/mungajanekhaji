#Ask for the age of each person in a family who wants to buy a movie ticket.
ages = input("Please enter the ages of all family members (separated by spaces): ").split()
ages = [int(age) for age in ages]
#Calculate the total cost based on the following rules:
#Free for people under 3.
#$10 for people aged 3 to 12.
#$15 for anyone over 12.
#Print the total ticket cost.
total_cost = 0
for age in ages:
    if age < 3:
        total_cost += 0
    elif 3 <= age <= 12:
        total_cost += 10
    else:
        total_cost += 15
print(f"The total ticket cost is: ${total_cost:.2f}")

