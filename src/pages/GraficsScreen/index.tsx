import { FC } from "react";
import { View } from "react-native";
import styles from "./styles";
import CustomBarChart from "../../component/CustomBarChart";

const GraficsScreen: FC = () => (
  <View style={styles.container}>
     <CustomBarChart
      data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [200, 45, 28, 80, 99, 43],
          },
        ],
      }}
    />
  </View>
);

export default GraficsScreen;
