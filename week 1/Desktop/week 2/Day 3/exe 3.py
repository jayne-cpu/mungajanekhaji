#Use the string module to generate a random string of length 5, consisting of uppercase and lowercase letters only.

import string
import random
from typing import Concatenate
def generate_random_string(length=5):
    letters = string.ascii_letters  # This includes both uppercase and lowercase letters
    random_string = ''.join(random.choice(letters) for _ in range(length))
    return random_string
random_string = generate_random_string()
print(f"Generated random string: {random_string}")  
#Use a loop to select 5 random characters from the combined string.
#Concatenate the characters to form the random string.
random_characters = [random.choice(random_string) for _ in range(5)]
final_string = ''.join(random_characters)
print(f"Final random string: {final_string}")


