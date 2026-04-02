#Create a set called my_fav_numbers and populate it with your favorite numbers.
my_fav_numbers = {2, 4, 6, 8}

#Add two more numbers to your set.
my_fav_numbers.add(10)
my_fav_numbers.add(12)

#Create a set called friend_fav_numbers and populate it with your friend’s favorite numbers.
friend_fav_numbers = {1, 3, 5, 7}

#Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)

