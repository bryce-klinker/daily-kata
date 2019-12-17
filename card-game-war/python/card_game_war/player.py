from typing import List

from card_game_war.card import Card


class Player:
    @property
    def hand(self):
        return self.__cards

    def __init__(self, hand: List[Card]):
        self.__cards = hand
        self.__current_card_index = 0

    def play_card(self):
        card = self.__cards[self.__current_card_index]
        self.__update_current_card_index()
        return card

    def __update_current_card_index(self):
        self.__current_card_index += 1

        if self.__current_card_index >= len(self.hand):
            self.__current_card_index = 0
