```gherkin
Scenario: Custom Delimiter
    Given the string '//[;]\n6;5;2;8'
    When the sum is calculated
    Then the sum is '21'
```

[Next Requirement](./requirements-7.md)
