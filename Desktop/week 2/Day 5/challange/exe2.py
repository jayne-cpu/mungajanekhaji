import random

class Card:
    """Represents a single playing card."""
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        # This allows the card to print nicely, e.g., "A of Spades"
        return f"{self.value} of {self.suit}"

class Deck:
    """Manages a collection of 52 Card objects using Composition."""
    def __init__(self):
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.reset_deck()

    def reset_deck(self):
        """Creates a fresh set of 52 cards."""
        self.cards = [Card(s, v) for s in self.suits for v in self.values]

    def shuffle(self):
        """Ensures the deck is full and then shuffles randomly."""
        if len(self.cards) < 52:
            self.reset_deck()
        random.shuffle(self.cards)
        print("--- Deck Shuffled ---")

    def deal(self):
        """Removes and returns a single card from the deck."""
        if not self.cards:
            return None
        return self.cards.pop()

# --- Example Usage ---
if __name__ == "__main__":
    # 1. Create the deck
    my_deck = Deck()
    
    # 2. Shuffle it
    my_deck.shuffle()
    
    # 3. Deal a 'hand' of 5 cards
    print("Dealing a 5-card hand:")
    hand = []
    for _ in range(5):
        card = my_deck.deal()
        if card:
            hand.append(card)
    
    print(hand)
    
    # 4. Show remaining cards in deck
    print(f"\nCards remaining in deck: {len(my_deck.cards)}")