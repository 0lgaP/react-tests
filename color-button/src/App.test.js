import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

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