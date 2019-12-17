from card_game_war.card import Card
from card_game_war.card_suit import CardSuit
from card_game_war.player import Player


class TestPlayer:

    def test_when_player_plays_card_then_returns_card(self):
        player = Player([Card(1, CardSuit.HEART)])

        card = player.play_card()

        assert card == Card(1, CardSuit.HEART)

    def test_when_player_plays_multiple_times_then_returns_card_in_sequential_order_starting_at_the_top(self):
        hand = [
            Card(2, CardSuit.SPADE),
            Card(1, CardSuit.HEART),
        ]
        player = Player(hand)

        first_card = player.play_card()
        second_card = player.play_card()

        assert first_card == Card(2, CardSuit.SPADE)
        assert second_card == Card(1, CardSuit.HEART)

    def test_when_player_plays_entire_hand_then_the_next_card_is_the_first_card_in_the_players_hand(self):
        hand = [
            Card(2, CardSuit.SPADE),
            Card(1, CardSuit.HEART),
        ]
        player = Player(hand)
        player.play_card()
        player.play_card()

        card = player.play_card()

        assert card == Card(2, CardSuit.SPADE)
