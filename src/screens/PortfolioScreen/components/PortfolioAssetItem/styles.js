import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  ticker: {
    color: 'grey',
    fontWeight: '700' 
  },
  coinContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: "#121212"
  },
  quantityContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end'
  }
});

export default styles;