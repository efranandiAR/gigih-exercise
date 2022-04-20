import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Home from '..';
import { Provider } from "react-redux";
import store from "../../../store";

test('renders SearchBarTextInput', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const input = screen.getByTestId(/SearchBarTextInput/i);
  expect(input).toBeInTheDocument();
});

test('renders SearchButton', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const button = screen.getByTestId(/SearchButton/i);
  expect(button).toBeInTheDocument();
});