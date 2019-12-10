```gherkin
Scenario: Multiple Custom Delimiters of Any Length
    Given the string '//[;;][**]\n7;;12**7'
    When the sum is calculated
    Then the sum is '26'
```
