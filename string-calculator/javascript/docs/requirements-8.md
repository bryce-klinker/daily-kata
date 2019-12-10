```gherkin
Scenario: Report Multiple Negative Numbers
    Given the string '6,-5,-2,-8'
    When the sum is calculated
    Then 'negatives not allowed: -5, -2, -8' error is raised
```

[Next Requirement](./requirements-9.md)
