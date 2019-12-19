#include "../include/fizzbuzz.h"
#include <string>
using namespace std;

bool is_divisible_by(int divisor, int number)
{
    return number % divisor == 0;
}

bool is_divisible_by(int *divisors, int number, int array_size)
{
    for (int i = 0; i < array_size; ++i) {
        if (!is_divisible_by(divisors[i], number))
        {
            return false;
        }
    }
    return true;
}


string fizzbuzz(int number)
{
    int three_and_five[] = {3, 5};
    size_t array_size = sizeof(three_and_five) / sizeof(int);
    if (is_divisible_by(three_and_five, number, array_size))
    {
        return "fizzbuzz";
    }

    if (is_divisible_by(3, number))
    {
        return "fizz";
    }

    if (is_divisible_by(5, number))
    {
        return "buzz";
    }
    return to_string(number);
}



