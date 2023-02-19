import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import AddMinusButton from '../App/customComponents/AddMinusButton';

afterEach(cleanup);

const props1 = {
  value: 1,
  onAdd: jest.fn(),
  onMinus: jest.fn(),
  maxQty: 9990,
};
const renderScreen = prop => render(<AddMinusButton {...prop} />);

describe('Success test Cases for QuantityPicker components', () => {
  afterEach(cleanup);
  it('To render addToCartMinus with props1', async () => {
    const renderScreenWithQualityPicker = renderScreen(props1);
    const button = await renderScreenWithQualityPicker.findByTestId(
    'addToCartMinus',
    );
    fireEvent.press(button);
    expect(renderScreenWithQualityPicker).toBeTruthy();
  });
//   it('To render addToCartInput with props1', async () => {
//     const renderScreenWithQualityPicker = renderScreen(props1);
//     const button = await renderScreenWithQualityPicker.findByTestId(
//       'addToCartInput',
//     );
//     fireEvent(button, 'onSubmitEditing', 'test');
//     fireEvent(button, 'onChangeText', 'test');
//     fireEvent(button, 'onChangeText', '');
//     expect(renderScreenWithQualityPicker).toBeTruthy();
//   });
//   it('To render addToCartPlus with props1', async () => {
//     const renderScreenWithQualityPicker = renderScreen(props1);
//     const button = await renderScreenWithQualityPicker.findByTestId(
//       'addToCartPlus',
//     );
//     fireEvent.press(button);
//     expect(renderScreenWithQualityPicker).toBeTruthy();
//   });
});