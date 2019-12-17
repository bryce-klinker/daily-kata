def deal_war_hands():
    return [
        [Card(2)] * 26,
        [Card(2)] * 26
    ]


class Card:
    @property
    def value(self):
        return self.__value

    def __init__(self, value):
        self.__value = value
