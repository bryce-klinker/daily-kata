import pytest

from card_game_war.war_game import WarGame


@pytest.fixture()
def game():
    yield WarGame()


class TestWarGame:

    def test_when_game_started_then_game_should_have_two_players(self, game):
        game.start()

        assert len(game.players) == 2

    def test_when_game_started_then_each_player_has_half_a_deck_of_cards(self, game):
        game.start()

        assert len(game.players[0].hand) == 26
        assert len(game.players[1].hand) == 26

    def test_when_game_started_then_each_player_is_dealt_a_hand(self, game):
        game.start()

        assert game.players[0].hand[0] != game.players[1].hand[0]
