import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 190,
  },
  cardContent: {
    padding: 20,
  },
  cardNumber: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 2,
    marginTop: 80,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  cardLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
  },
  cardInfo: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
