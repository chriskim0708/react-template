import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React, { FC, ReactNode, FunctionComponent, cloneElement } from 'react';
import { Navigate } from 'react-router-dom';

const Cart =
  ({ children }: { children: EmotionJSX.Element }) =>
  ({ str }: { str: string }) => {
    const MyComp = cloneElement(children, { str });
    // MyComp.displayName = 'MyComp';
    return MyComp;
  };

export default Cart;
