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
        if len(self.__cards) == 0:
            return None

        card = self.__cards[0]
        self.__cards.remove(card)
        return card

    def __update_current_card_index(self):
        self.__current_card_index += 1

        if self.__current_card_index >= len(self.hand):
            self.__current_card_index = 0

    def take_cards(self, cards: List[Card]):
        for card in cards:
            self.__cards.append(card)
