import { FC } from "react";
import { Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { CustomBarChartProps } from "./prop/CustomBarChartProps";

const CustomBarChart: FC<CustomBarChartProps> = ({ data, yAxisLabel = 'R$', yAxisSuffix = 'k' }) => (
  <BarChart
    data={data}
    width={Dimensions.get('window').width - 36}
    height={200}
    yAxisLabel={yAxisLabel}
    yAxisSuffix={yAxisSuffix}
    chartConfig={{
      backgroundColor: '#fff',
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
);

export default CustomBarChart;
