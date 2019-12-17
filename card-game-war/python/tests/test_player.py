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

    def test_when_player_plays_entire_hand_then_the_next_card_is_none(self):
        hand = [
            Card(2, CardSuit.SPADE),
            Card(1, CardSuit.HEART),
        ]
        player = Player(hand)
        player.play_card()
        player.play_card()

        card = player.play_card()

        assert card is None

    def test_when_player_plays_card_then_card_is_removed_from_hand(self):
        hand = [
            Card(2, CardSuit.SPADE)
        ]

        player = Player(hand)

        player.play_card()

        assert len(player.hand) == 0

    def test_when_player_takes_cards_then_cards_are_added_to_the_bottom_of_the_players_hand(self):
        player = Player([Card(1, CardSuit.SPADE)])

        player.take_cards([Card(2, CardSuit.DIAMOND), Card(3, CardSuit.SPADE)])

        assert Card(2, CardSuit.DIAMOND) == player.hand[1]
        assert Card(3, CardSuit.SPADE) == player.hand[2]

    def test_when_player_takes_cards_then_all_cards_are_added_to_the_bottom_of_the_players_hand(self):
        player = Player([])

        cards_taken = [Card(2, CardSuit.SPADE), Card(3, CardSuit.SPADE), Card(4, CardSuit.SPADE)]
        player.take_cards(cards_taken)

        assert Card(2, CardSuit.SPADE) == player.hand[0]
        assert Card(3, CardSuit.SPADE) == player.hand[1]
        assert Card(4, CardSuit.SPADE) == player.hand[2]
