from card_game_war.card_suit import CardSuit


class Card:
    @property
    def value(self) -> int:
        return self.__value

    @property
    def suit(self) -> CardSuit:
        return self.__suit

    def __init__(self, value: int, suit: CardSuit):
        self.__suit = suit
        self.__value = value

    def __eq__(self, other):
        return isinstance(other, Card)\
            and self.value == other.value\
            and self.suit == other.suit
