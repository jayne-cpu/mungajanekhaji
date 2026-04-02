class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    # String representation (print)
    def __str__(self):
        return f"{self.amount} {self.currency}s"

    # Representation (repr)
    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    # Convert to integer
    def __int__(self):
        return self.amount

    # Addition
    def __add__(self, other):
        # Case 1: adding integer
        if isinstance(other, int):
            return self.amount + other
        
        # Case 2: adding another Currency
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
                )
            return self.amount + other.amount
        
        # Invalid type
        else:
            raise TypeError("Unsupported type for addition")

    # In-place addition (+=)
    def __iadd__(self, other):
        # Case 1: adding integer
        if isinstance(other, int):
            self.amount += other
        
        # Case 2: adding another Currency
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
                )
            self.amount += other.amount
        
        else:
            raise TypeError("Unsupported type for addition")
        
        return self
    