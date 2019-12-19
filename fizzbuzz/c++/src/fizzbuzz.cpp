//
// Created by bryce.a.klinker on 12/19/19.
//

#include "../include/fizzbuzz.h"
#include <string>
using namespace std;

string fizzbuzz(int number)
{
    if (number % 3 == 0)
    {
        return "fizz";
    }
    return to_string(number);
}

