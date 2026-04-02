#You are given a list of Disney characters. Create three dictionaries based on different patterns as shown below:
#Character List:
#users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
#Create a dictionary that maps characters to their indices:
char_to_index = {user: index for index, user in enumerate(users)}
print(char_to_index)    
#Create a dictionary that maps indices to characters:
index_to_char = {index: user for index, user in enumerate(users)}
print(index_to_char)
#Create a dictionary where characters are sorted alphabetically and mapped to their indices:
sorted_users = sorted(users)
sorted_char_to_index = {user: index for index, user in enumerate(sorted_users)}
print(sorted_char_to_index)