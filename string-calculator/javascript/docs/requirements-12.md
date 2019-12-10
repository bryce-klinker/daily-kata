```gherkin
Scenario: Multiple Custom Delimiters
    Given the string '//[;][*]\n7;12*7'
    When the sum is calculated
    Then the sum is '26'
```

[Next Requirement](./requirements-13.md)
