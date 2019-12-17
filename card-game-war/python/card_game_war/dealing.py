from typing import List
from random import sample

from card_game_war.card import Card
from card_game_war.card_suit import CardSuit


def deal_war_hands():
    deck = __get_randomized_deck()
    return [
        deck[:26],
        deck[26:]
    ]


def __get_randomized_deck():
    deck = __get_deck()
    return sample(deck, k=len(deck))

def __get_deck():
    cards_by_suit = [__get_suit(item) for item in CardSuit.all()]
    return [card for suit_cards in cards_by_suit for card in suit_cards]


def __get_suit(suit: CardSuit) -> List[Card]:
    return [Card(i, suit) for i in range(2, 15)]
