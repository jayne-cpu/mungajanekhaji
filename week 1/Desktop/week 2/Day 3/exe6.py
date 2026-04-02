#Use the datetime module to calculate and display the time left until January 1st.
from datetime import datetime   
# Get the current date and time
now = datetime.now()    
# Define the target date (November 23 of the current year)
target_date = datetime(now.year, 11, 23)
# Calculate the time difference
time_left = target_date - now
# Display the time left
print(f"Time left until November 23rd: {time_left}")

