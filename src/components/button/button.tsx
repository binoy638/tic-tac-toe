import React, { ReactElement } from "react";
import Text from "../text/Text";
import styles from "./button.style";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export default function Button({ title, style, ...props }: ButtonProps): ReactElement {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
