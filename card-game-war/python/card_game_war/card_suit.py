from enum import Enum


class CardSuit(str, Enum):
    HEART = 'Heart'
    SPADE = 'Spade'
    CLUB = 'Club'
    DIAMOND = 'Diamond'

    @classmethod
    def all(cls):
        return [
            CardSuit.CLUB,
            CardSuit.HEART,
            CardSuit.SPADE,
            CardSuit.DIAMOND,
        ]
