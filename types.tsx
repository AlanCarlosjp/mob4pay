export type RouteName = 'Home' | 'Grafics';

export type Purchase = {
    date: string;
    store: string;
    description: string;
    value: number;
}

export type ClientInfo = {
    name: string;
    cardNumber: string;
    expirationDate: string;
}

export type CustomBarChartData = {
    labels: string[];
    datasets: { data: number[] }[];
  }
  
