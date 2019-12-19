#include "../include/fizzbuzz.h"
#include <string>
using namespace std;

bool is_divisible_by(int divisor, int number)
{
    return number % divisor == 0;
}

string fizzbuzz(int number)
{
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



