#include "gtest/gtest.h"
#include "fizzbuzz.h"

TEST(FizzBuzz, when_number_is_1_then_returns_1)
{
    ASSERT_EQ("1", fizzbuzz(1));
}

