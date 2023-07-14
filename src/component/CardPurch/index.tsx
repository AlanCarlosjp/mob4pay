import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { CardPurchProps } from './prop';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'

const CardPurch: React.FC<CardPurchProps> = ({ data }) => {
  // Convert the date string to a Date object
  const date = new Date(data.date);

  const day = format(date, 'd', { locale: ptBR });
  const month = format(date, 'MMM', { locale: ptBR });

  return (
    <View style={styles.card}>
      <View style={styles.dateContainer}>
        <View style={{backgroundColor: 'red', height: 10}}/>
        <Text style={styles.dateText}>{day}</Text>
        <Text style={styles.monthText}>{month}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.text}>Loja: {data.store}</Text>
        <Text style={styles.text}>Descrição: {data.description}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>R${data.value.toFixed(2)}</Text>
      </View>
    </View>
  );
}

export default CardPurch;
