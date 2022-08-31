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

[Accessibility Roles](https://www.w3.org/TR/wai-aria/#role_definitions)


Roles are more useful. Some elements have built in roles like button or a-tag is 'link' etc

[TestingLibrary Jest-Dom](https://github.com/testing-library/jest-dom)

Testing Styles from Imported CSS Modules
A common question about testing styles is "why doesn't .toHaveStyle() work with classes from my imported CSS module?"

Mocking CSS modules
In the case of create-react-app applications -- or applications that have otherwise mocked css modules for Jest -- CSS module imports are simply ignored for Jest test.

Cosmetic Styles vs. Functional Styles
In many cases, the classes are merely cosmetic and won't affect functional tests (such as placement of the element on the page). In these cases, mocking the CSS modules works fine. However, sometimes classes do affect function. For example, say you have a CSS module that uses a hidden class, which results in display: none when interpreted. Without adding a Jest transformer to interpret the CSS, Testing Library will not know that hidden class would result in display: none. Tests around element visibility that rely on this class will fail.

Transformers
For styles to be interpreted in tests, you need a transformer to, well, transform the CSS classes into styles. Here are a couple options:

https://www.npmjs.com/package/jest-transform-css

https://www.npmjs.com/package/jest-css-modules-transform

The latter has more downloads per week, but the former seems to be more actively maintained.

Testing for Class Name
Another possibility would be to check explicitly for the class name (hidden in this example), using toHaveClass. This would be simpler, but farther from the actual user experience (this is testing implementation details, rather than how the user sees the page). It's always a balance, and I think either this approach or transforming the CSS would be defensible.

