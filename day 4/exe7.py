#Create a function called get_random_temp() that returns a random integer between -10 and 40 degrees Celsius.
import random
def get_random_temp():
    return random.randint(-10, 40)
#Create a function called main(). Inside this function:
#Call get_random_temp() to get a random temperature.
#Store the temperature in a variable and print a friendly message like:
#“The temperature right now is 32 degrees Celsius.”
def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")
#Inside main(), provide advice based on the temperature:
#Below 0°C: e.g., “Brrr, that’s freezing! Wear some extra layers today.”
#Between 0°C and 16°C: e.g., “Quite chilly! Don’t forget your coat.”
#Between 16°C and 23°C: e.g., “Nice weather.”
#Between 24°C and 32°C: e.g., “A bit warm, stay hydrated.”
#Between 32°C and 40°C: e.g., “It’s really hot! Stay cool.”
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= temp < 24:
        print("Nice weather.")
    elif 24 <= temp < 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

main()
#Modify get_random_temp() to return a random floating-point number using random.uniform() for more accurate temperature values.
def get_random_temp():
    return random.uniform(-10, 40)
#Instead of directly generating a random temperature, ask the user for a month (1-12) and determine the season using if/elif conditions.
#Modify get_random_temp() to return temperatures specific to each season.
def get_random_temp(month):
    if month in [12, 1, 2]:
        return random.uniform(-10, 0)
    elif month in [3, 4, 5]:
        return random.uniform(0, 16)
    elif month in [6, 7, 8]:
        return random.uniform(16, 24)
    elif month in [9, 10, 11]:
        return random.uniform(24, 32)
    else:
        return random.uniform(32, 40)
def main():
    month = int(input("Enter the month (1-12): "))
    temp = get_random_temp(month)
    print(f"The temperature right now is {temp:.2f} degrees Celsius.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= temp < 24:
        print("Nice weather.")
    elif 24 <= temp < 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

main()
