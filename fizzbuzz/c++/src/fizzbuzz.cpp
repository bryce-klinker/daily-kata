#include "../include/fizzbuzz.h"
#include <string>
using namespace std;

bool is_divisible_by(int number, int divisor)
{
    return number % divisor == 0;
}

string fizzbuzz(int number)
{
    if (is_divisible_by(number, 3))
    {
        return "fizz";
    }

    if (is_divisible_by(number, 5))
    {
        return "buzz";
    }
    return to_string(number);
}



