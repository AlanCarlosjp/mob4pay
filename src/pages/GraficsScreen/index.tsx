import { FC, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import CustomBarChart from "../../component/CustomBarChart";
import CardPurch from "../../component/CardPurch";
import PurchaseService from "../../service/Purchases";
import { Purchase } from "../../../types";

const GraficsScreen: FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    async function loadPurchases() {
      const data = await PurchaseService.getPurchases();
      setPurchases(data);
    }

    loadPurchases();
  }, []);

  return (
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
