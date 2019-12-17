class WarGame:
    @property
    def players(self):
        return [Player(), Player()]

    def start(self):
        pass


class Player:
    @property
    def cards(self):
        return [None] * 26


class TestWarGame:

    def test_when_game_started_then_game_should_have_two_players(self):
        game = WarGame()

        game.start()

        assert len(game.players) == 2

    def test_when_game_started_then_each_player_has_half_a_deck_of_cards(self):
        game = WarGame()

        game.start()

        assert len(game.players[0].cards) == 26
        assert len(game.players[1].cards) == 26

