import { FC } from "react";
import { Text, View, Dimensions } from "react-native";
import styles from "./styles";
import {
  BarChart,
} from 'react-native-chart-kit';

const GraficsScreen: FC = () => (
  <View style={styles.container}>
    <Text>Bar Chart</Text>
    <BarChart
      data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      }}
      width={Dimensions.get('window').width - 16}
      height={220}
      yAxisLabel={'$'}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  </View>
);

export default GraficsScreen;
