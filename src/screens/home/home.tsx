import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { ScrollView } from "react-native-gesture-handler";
import { GradientBackground, Button } from "@components";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={require(`@assets/logo.png`)} />
        <View style={styles.buttons}>
          <Button
            title="Single Player"
            onPress={() => {
              navigation.navigate("SinglePlayerGame");
            }}
            style={styles.button}
          />
          <Button title="Multiplayer" style={styles.button} />
          <Button title="Login" style={styles.button} />
          <Button title="Settings" style={styles.button} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
