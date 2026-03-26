#Use the datetime module to calculate and display the time left until January 1st.
from datetime import datetime

# Get the current date and time
now = datetime.now()

# Define the target date (January 1st of the next year)
target_date = datetime(now.year + 1, 1, 1)

# Calculate the time difference
time_left = target_date - now

# Display the time left
print(f"Time left until January 1st: {time_left}")