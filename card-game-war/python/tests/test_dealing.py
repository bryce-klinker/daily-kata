from card_game_war.dealing import deal_war_hands


class TestDealing:

    def test_when_deck_is_dealt_then_returns_half_the_deck_to_each_hand(self):
        hands = deal_war_hands()

        assert len(hands) == 2
