# Given data
items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$300"

# Step 1: Clean wallet (remove $ and commas)
wallet_amount = int(wallet.replace("$", "").replace(",", ""))

# Step 2: Create basket
basket = []

# Step 3: Loop through items
for item, price in items_purchase.items():
    # Clean price
    clean_price = int(price.replace("$", "").replace(",", ""))
    
    if wallet_amount >= clean_price:
        basket.append(item)
        wallet_amount -= clean_price  # update wallet

# Step 4: Output result
if len(basket) == 0:
    print("Nothing")
else:
    print(sorted(basket))
    