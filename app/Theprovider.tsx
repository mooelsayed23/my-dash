"use client";
import { store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
interface Props {
  children: ReactNode;
}
const Theprovider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
};

export default Theprovider;
