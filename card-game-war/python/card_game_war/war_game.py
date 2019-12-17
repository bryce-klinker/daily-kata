from card_game_war.dealing import deal_war_hands
from card_game_war.player import Player


class WarGame:
    @property
    def players(self):
        return self.__players

    def __init__(self):
        self.__players = []

    def start(self):
        hands = deal_war_hands()
        self.__players = [Player(hands[0]), Player(hands[1])]
