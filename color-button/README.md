# Assertions

```expect(linkElement).toBeInDocument()```

## expect
(expect)
* Jest global, starts the assertion

## Matcher
(.toBeInTHeDocument) or .toBeVisible or toBeChecked <- DOM spcific matchers
(.toHAveLength) or (.toBe) are general
* type of assertion
* this matcher comes from jest-dom

## Expect argument
(linkElement)
* subject of assertion

## Matcher agrument
()
* refines matcher


```screen.getTextBy()```
can take regex or string as matcher arguments

## Unit test
* tests one unit of code in isolation

Isolated - mock dependencies, tests internals
Easy to pinpoint errors
further from how users interact with software
more likely to break with refactoring
## Integration tests
* how multiple units work together
## Functional tests
* tests a particular function of software
* not testing code it tests BEHAVIOR

Include all relevavt units, test behavior
Close to how users interact with software
Robust Tests
More difficult to debug failing tests
## End To End
* use actual browser and server(cypress, selenium)


TDD vs BDD (test diven vs behavior driven)
BDD - QA, business partyners
TDD - developers

Accessible testing - test by accessibility tags, not ids to ensure screenreader compatibility
[TestingLibrary Link](https://testing-library.com/docs/queries/about/#priority)
