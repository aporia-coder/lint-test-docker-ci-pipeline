import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App as TodoList } from './App';

describe('To do list tests', () => {
  it('should render a todo item to the screen', () => {
    render(<TodoList />);
  });

  it('should render a correct Todo once form is submitted', () => {
    render(<TodoList />);
    const inputField = screen.getByTestId('input-field');
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.change(inputField, { target: { value: 'Clean room' } });
    fireEvent.click(submitButton);
    const todo = screen.getByText('Clean room');
    expect(todo).toBeInTheDocument();
  });
});
