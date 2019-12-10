```gherkin
Scenario: Negative Numbers are Not Allowed
    Given the string '6,5,-2,8'
    When the sum is calculated
    Then 'negatives not allowed: -2' error is raised
```

[Next Requirement](./requirements-8.md)
