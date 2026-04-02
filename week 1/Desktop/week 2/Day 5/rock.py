import random


class Game:
    def get_user_item(self):
        """Ask user for rock, paper, or scissors"""
        while True:
            choice = input("Choose (rock/paper/scissors): ").lower().strip()

            if choice in ["rock", "paper", "scissors"]:
                return choice
            else:
                print("❌ Invalid choice. Please try again.")

    def get_computer_item(self):
        """Randomly choose for computer"""
        return random.choice(["rock", "paper", "scissors"])

    def get_game_result(self, user_item, computer_item):
        """Determine game result"""
        if user_item == computer_item:
            return "draw"

        if (
            (user_item == "rock" and computer_item == "scissors") or
            (user_item == "paper" and computer_item == "rock") or
            (user_item == "scissors" and computer_item == "paper")
        ):
            return "win"

        return "loss"

    def play(self):
        """Play one round"""
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print("\n--- ROUND RESULT ---")
        print(f"You chose: {user_item}")
        print(f"Computer chose: {computer_item}")
        print(f"Result: {result.upper()}")

        return result