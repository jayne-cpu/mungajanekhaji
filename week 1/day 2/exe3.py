basket = ["banana", "apples","oranges", "blueberries"]
#1. Remove banana from the list.
basket.remove("banana")

#2. Remove blueberries from the list.
basket.remove("blueberries")

#3. Add kiwi to the end of the list.
basket.append("kiwi")

#4. Add apples to the begining of the list.
basket.insert(0, "apples")

#5. Count how many apples are in the basket.
apple_count = basket.count("apples")

#empty the basket
basket.clear()

print(basket)

