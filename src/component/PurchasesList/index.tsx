import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import PurchaseService from "../../service/Purchases";
import { Purchase } from "../../../types";
import CardPurch from "../../component/CardPurch";

const PurchasesList: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    async function loadPurchases() {
      const data = await PurchaseService.getPurchases();
      setPurchases(data);
    }

    loadPurchases();
  }, []);

  return (
    <FlatList
      data={purchases}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => <CardPurch data={item} />}
      initialNumToRender={3}
      maxToRenderPerBatch={3}
    />
  );
};

export default PurchasesList;
