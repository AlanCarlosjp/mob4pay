import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  dateContainer: {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  monthText: {
    fontSize: 14,
    color: 'white',
  },
  details: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  },
  valueContainer: {
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
