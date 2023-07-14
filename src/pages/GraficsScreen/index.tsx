import { FC } from "react";
import { View } from "react-native";
import styles from "./styles";
import CustomBarChart from "../../component/CustomBarChart";
import CardPurch from "../../component/CardPurch";

const GraficsScreen: FC = () => (
  <View style={styles.container}>
    <View style={styles.chartContainer}>
      <CustomBarChart
        data={{
          labels: ['January', 'February', 'March', 'April',
            'May', 'June'],
          datasets: [
            {
              data: [200, 45, 28, 80, 99, 43],
            },
          ],
        }}
      />
    </View>
    <View style={styles.cardContainer}>
      <CardPurch data={{
        date: "2023-06-28T09:30:00",
        store: "1",
        description: "Item 1",
        value: 10.99
      }} />
    </View>
  </View>
);

export default GraficsScreen;
