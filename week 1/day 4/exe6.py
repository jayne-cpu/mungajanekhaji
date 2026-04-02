#Create a list called magician_names with the given names:
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
#Create a function called show_magicians() that takes the magician_names list as a parameter.
#Inside the function, iterate through the list and print each magician’s name.

def show_magicians(names):
    for name in names:
        print(name)
#Create a function called make_great() that takes the magician_names list as a parameter.
#Inside the function, use a for loop to iterate through the list and add “the Great” before each magician’s name.
def make_great(names):
    for i in range(len(names)):
        names[i] = "the Great " + names[i]
#Call make_great() to modify the list.
make_great(magician_names)
#Call show_magicians() to display the modified list.
show_magicians(magician_names)

