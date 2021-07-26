import React, { ReactNode, ReactElement } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

type TextProps = {
  weigth: "400" | "700";
  children: ReactNode;
} & NativeTextProps;

const defaultProps = {
  weigth: "700"
};

export default function Text({ children, style, weigth, ...props }: TextProps): ReactElement {
  let fontFamily;
  if (weigth === "400") {
    fontFamily = "DeliusUnicase_400Regular";
  }
  if (weigth === "700") {
    fontFamily = "DeliusUnicase_700Bold";
  }
  return (
    <NativeText
      {...props}
      style={[
        {
          fontFamily
        },
        style
      ]}
    >
      {children}
    </NativeText>
  );
}

Text.defaultProps = defaultProps;
