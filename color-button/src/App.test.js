import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name:/learn react/i });
  expect(linkElement).toBeInTheDocument();
});

// test style
test('button has correct inital color', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  expect(colorButton).toHaveStyle( {backgroundColor: 'red'})
});

test('button has correct inital text', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toHaveTextContent('Change to blue')
});

test('button turns blue after click', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
  //click button
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
  expect(colorButton.textContent).toBe('Change to red')

});

test('checkbox disables on first click enables on second click', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'})
  expect(colorButton).toBeEnabled()

  //check button starts enabled
  expect(checkbox).not.toBeChecked()
  expect(colorButton).toBeEnabled()

  //check that checkbox starts unchecked
fireEvent.click(checkbox)
expect(colorButton).toBeDisabled()
})

test('checkbox is grey when disabled', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'})

  //change button to blue
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  //disable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'})

  //re-enable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
})

//combine in a describe

describe('spaces before camel letetrs', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('RedBlood')).toBe('Red Blood')
  })
  test('works for multiple inner capital letter', () => {
    expect(replaceCamelWithSpaces('RedBloodTomorrow')).toBe('Red Blood Tomorrow')
  })
})