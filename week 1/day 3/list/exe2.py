#Write a program that calculates the total cost of movie tickets for a family based on their ages.
ages = [5, 10, 30, 60]
total_cost = 0
for age in ages:
    if age < 3:
        total_cost += 0
    elif age >= 3 and age < 12:
        total_cost += 10
    else:
        total_cost += 15
print(f"The total cost of the movie tickets is ${total_cost}.")

