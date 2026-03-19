#Define a function named describe_city().
#This function should accept two parameters: city and country.
#Give the country parameter a default value, such as “Unknown”.
from ast import Try


def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")
#Inside the function, set up the code to display a sentence like “ is in “.
#Replace <city> and <country> with the parameter values.
#Call the describe_city() function with different city and country combinations.
#Try calling it with and without providing the country argument to see the default value in action.

describe_city("Reykjavik", "Iceland")
describe_city("Paris", "France")
describe_city("Tokyo")
describe_city("New York", "USA")