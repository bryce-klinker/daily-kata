```gherkin
Scenario: Ignore Numbers Greater than 1000
    Given the string '1,3,1001'
    When the sum is calculated
    Then the sum is '4'
```

[Next Requirement](./requirements-11.md)
