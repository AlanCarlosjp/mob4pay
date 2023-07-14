import { FC, useEffect, useState } from "react";
import { View } from "react-native";
import { format } from "date-fns";
import styles from "./styles";
import CustomBarChart from "../../component/CustomBarChart";
import PurchaseService from "../../service/Purchases";
import PurchasesList from "../../component/PurchasesList";

const GraficsScreen: FC = () => {
  const [chartData, setChartData] = useState<{
    labels: string[],
    datasets: { data: number[] }[]
  }>({
    labels: [],
    datasets: [{ data: [] }]
  });

  useEffect(() => {
    async function loadChartData() {
      const data = await PurchaseService.getPurchases();
      // Agrupa compras por mês
      const groupedData = data.reduce((acc, purchase) => {
        // Extrai o mês e o ano da data da compra
        const key = format(new Date(purchase.date), "yyyy-MM");
        if (!acc[key]) {
          acc[key] = purchase.value;
        } else {
          acc[key] += purchase.value;
        }
        return acc;
      }, {} as { [key: string]: number });
      // Transforma os dados agrupados em um formato adequado para o gráfico
      const labels = Object.keys(groupedData).sort();
      const chartData = {
        labels,
        datasets: [{ data: labels.map((label) => groupedData[label]) }]
      };
      setChartData(chartData);
    }
    loadChartData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <CustomBarChart
          data={chartData}
        />
      </View>
      <View style={{ height: 10 }} />
      <PurchasesList />
    </View>
  );
};

export default GraficsScreen;
