#You are given two lists. Convert them into a dictionary where the first list contains the keys and the second list contains the corresponding values.
keys = ["name", "age", "city"]
values = ["Alice", 30, "New York"]
my_dict = dict(zip(keys, values))
print(my_dict)

