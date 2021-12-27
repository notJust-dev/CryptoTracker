import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  currentBalance: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  currentBalanceValue: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    letterSpacing: 1
  },
  valueChange: {
    fontWeight: '700',
    fontSize: 16,
  },
  percentageChange: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  priceChangePercentageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 3,
    paddingVertical: 8,
    borderRadius: 5,
  },
  assetsLabel: {
    color: 'white',
    fontSize: 23,
    fontWeight: '700',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#4169E1',
    padding: 10,
    alignItems: 'center',
    marginVertical: 25,
    marginHorizontal: 10,
    borderRadius: 5 
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600'
  }
});

export default styles;