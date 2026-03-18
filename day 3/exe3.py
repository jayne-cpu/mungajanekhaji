#Create and manipulate a dictionary that contains information about the Zara brand.
#Create a dictionary called brand with the following key-value pairs:
#name: Zara
#creation_date: 1975
#creator_name: Amancio Ortega Gaona
#type_of_clothes:men, women, children, home
#international_competitors: Gap, H&M, Benetton
#number_stores: 7000
#major_color: 
#    France: blue, 
#    Spain: red, 
#    US: pink, green
#Modify and access the dictionary as follows:
#Change the value of number_stores to 2.
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": ["blue"],
        "Spain": ["red"],
        "US": ["pink", "green"]
    }
}
brand["number_stores"] = 2
#Print a sentence describing Zara’s clients using the type_of_clothes key.
print(f"Zara's clients include {', '.join(brand['type_of_clothes'])}.")
#Add a key called country_creation with a value of Spain.
brand["country_creation"] = "Spain"
#Check if the key international_competitors is in the dictionary. If it is, add the value "Desigual".
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
#Delete the information about the date of creation.
del brand["creation_date"]
#Print the last item in the international_competitors list.
print(f"The last international competitor is {brand['international_competitors'][-1]}.")
#Print the major colors in the US.
print(f"The major clothes colors in the US are {', '.join(brand['major_color']['US'])}.")
#Print the amount of keys in the dictionary.
print(f"The dictionary contains {len(brand)} keys.")
#Print the keys of the dictionary.
print(f"The keys of the dictionary are: {', '.join(brand.keys())}.")
