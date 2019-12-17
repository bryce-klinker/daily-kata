class WarGame:
    @property
    def players(self):
        return [1,1]

    def start(self):
        pass


class TestWarGame:

    def test_when_game_started_then_game_should_have_two_players(self):
        game = WarGame()

        game.start()

        assert len(game.players) == 2

