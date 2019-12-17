from typing import List

from card_game_war.card import Card


class Player:
    @property
    def hand(self):
        return self.__cards

    def __init__(self, hand: List[Card]):
        self.__cards = hand
