import { FC } from "react";
import { View } from "react-native";
import styles from "./style";
import CredCard from "../../component/CredCard";
import PurchasesList from "../../component/PurchasesList";

const HomeScreen: FC = () => (
  <View style={styles.container}>
    <View style={{padding: 20}} />
    <CredCard />
    <View style={{padding: 20}} />

    <PurchasesList />
  </View>
);


export default HomeScreen;