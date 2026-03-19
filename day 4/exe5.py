# Create a function to describe a shirt’s size and message, with default values.
# Key Python Topics: functions, parameters, default values
# Define a function named make_shirt() that accepts two parameters: size and text.
# Set up the function to display a sentence summarizing the shirt’s size and message.
# Modify make_shirt() so that size has a default value of “large” and text has a default value of “I love Python”.


def make_shirt(size="large", text="beautiful"):
    print(f"Shirt size: {size}, Message: {text}")

# Call the function with default values
make_shirt()

# Call the function with custom values
make_shirt("medium", "Hello, looks nice!")

# Call make_shirt() to make a large shirt with the default message.
make_shirt()

# Call make_shirt() to make a medium shirt with the default message.
make_shirt("medium", "Hello, looks nice!")

# Call make_shirt() to make a shirt of any size with a different message.
make_shirt("small", "wonderful!")

# Call make_shirt() using keyword arguments (e.g., make_shirt(size="small", text="wonderful!")).
make_shirt(size="small", text="wonderful!")


