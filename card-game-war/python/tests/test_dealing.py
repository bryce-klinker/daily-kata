from card_game_war.dealing import deal_war_hands


class TestDealing:

    def test_when_deck_is_dealt_then_returns_two_hands(self):
        hands = deal_war_hands()

        assert len(hands) == 2

    def test_when_deck_is_dealt_then_returns_half_the_deck_to_each_hand(self):
        hands = deal_war_hands()

        assert len(hands[0]) == 26
        assert len(hands[1]) == 26

    def test_when_deck_is_dealt_then_two_hands_of_cards_are_dealt(self):
        hands = deal_war_hands()

        card = hands[0][0]
        assert 1 < card.value < 15
        assert card.suit in ['Heart', 'Spade', 'Diamond', 'Club']

    def test_when_deck_is_dealt_then_unique_cards_are_in_each_hand(self):
        hands = deal_war_hands()

        assert hands[0][0] != hands[1][0]
