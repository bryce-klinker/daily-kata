#include "gtest/gtest.h"
#include "fizzbuzz.h"

TEST(FizzBuzz, when_number_is_1_then_returns_1)
{
    ASSERT_EQ("1", fizzbuzz(1));
}

TEST(FizzBuzz, when_number_is_2_then_returns_2)
{
    ASSERT_EQ("2", fizzbuzz(2));
}

TEST(FizzBuzz, when_number_is_3_then_returns_fizz)
{
    ASSERT_EQ("fizz", fizzbuzz(3));
}

TEST(FizzBuzz, when_number_is_divisible_by_three_then_returns_fizz)
{
    ASSERT_EQ("fizz", fizzbuzz(6));
}

TEST(FizzBuzz, when_number_is_5_then_returns_buzz)
{
    ASSERT_EQ("buzz", fizzbuzz(5));
}

TEST(FizzBuzz, when_number_is_15_then_returns_fizzbuzz)
{
    ASSERT_EQ("fizzbuzz", fizzbuzz(15));
}
