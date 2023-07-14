import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    width: 400,
    borderRadius: 0,
    marginBottom: 0,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  dateContainer: {
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 80,
    width: 80,
    padding: 0
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9a9a9a',
  },
  monthText: {
    fontSize: 14,
    color: '#9a9a9a',
  },
  details: {
    marginLeft: 10, 
  },
  text: {
    fontSize: 14,
  },
  valueContainer: {
    marginLeft: 10, 
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
