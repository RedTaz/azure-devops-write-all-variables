# Write all variables

Adds a pipeline task which writes all variable keys and values (including secrets) to a file in JSON format.

## Example
```
steps:
- task: writeAllVariables@1
  displayName: 'Write all variables'
  inputs:
    filepath: 'variables.json'
```