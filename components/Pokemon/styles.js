import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  rowImage: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  card: {
    backgroundColor: '#dbfffe',
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    width: '100%',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 20
  },
  typesCompleto: {
    flexDirection: "row",
  },
  typesPorColumna: {
    flex: 1,
  },
  abilitiesCompleto: {
    flexDirection: "row",
  },
  abilitiesPorFila: {
    flex: 1,
  },
  textTypes: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  textAbilities: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
  titleAbilities: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
  caractView: {
    flexDirection: "column",
  },
  caractColumn: {
    flex: 1
  }
});

export default styles;
