import { FC, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import CustomBarChart from "../../component/CustomBarChart";
import CardPurch from "../../component/CardPurch";
import PurchaseService from "../../service/Purchases";
import { Purchase } from "../../../types";

const GraficsScreen: FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [chartData, setChartData] = useState<{labels: string[],
    datasets: {data: number[]}[]}>({
    labels: [],
    datasets: [{data: []}]
  });

  useEffect(() => {
    async function loadPurchases() {
      const data = await PurchaseService.getPurchases();
      setPurchases(data);

      // Junta as compras por mês
      const groupedData = data.reduce((acc, purchase) => {
        // Extrai o mês e o ano da data da compra
        const month = new Date(purchase.date).getMonth();
        const year = new Date(purchase.date).getFullYear();

        const key = `${month}-${year}`;

        if (!acc[key]) {
          acc[key] = 1;
        } else {
          acc[key]++;
        }

        return acc;
      }, {} as {[key: string]: number});

      // Transforma os dados agrupados em um formato adequado para o gráfico
      const chartData = {
        labels: Object.keys(groupedData),
        datasets: [{data: Object.values(groupedData)}]
      };

      setChartData(chartData);
    }

    loadPurchases();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <CustomBarChart
          data={chartData}
        />
      </View>
      <View style={{height: 10}}/>
        <FlatList
          data={purchases}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => <CardPurch data={item} />}
          initialNumToRender={3} 
          maxToRenderPerBatch={3} 
        />
    </View>
  );
};

export default GraficsScreen;
