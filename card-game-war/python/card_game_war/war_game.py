from card_game_war.player import Player


class WarGame:
    @property
    def players(self):
        return [Player(), Player()]

    def start(self):
        pass
