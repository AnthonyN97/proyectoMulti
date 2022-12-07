import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  pokeCardText: {
    flex:1,
    height: '100%',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  pokeItemHeader: {
    color: '#fff',
    fontSize: 24
  },
  pokeItemBody: {
    color: '#fff',
    fontSize: 10,
  },
  pokeImage: {
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
  },
})

export default styles