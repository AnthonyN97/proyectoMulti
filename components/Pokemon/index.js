import { PureComponent } from 'react';
import { View, Text, Image, ActivityIndicator, ImageBackground } from 'react-native';
import styles from './styles';

class Pokemon extends PureComponent {
  state = {
    pokeData: [],
    loading: true,
    image: '',
    estadisticas: [],
  };
  static navigationOptions = ({ route }) => ({
    title: `${route.params.name} Info`,
  });
  async componentDidMount() {
    try {
      const { route } = this.props;
      const url = route.params.url;
      const pokemonApiCallData = await fetch(url);
      const pokemonData = await pokemonApiCallData.json();
      var typeColorHead = "";
      var typeColorBody = "";
      switch (pokemonData.types[0]['type']['name']) {
        case 'normal':
          typeColorHead = '#eef0f0';
          typeColorBody = '#F7F8F8';
          break;
        case 'fighting':
          typeColorHead = '#B13024';
          typeColorBody = '#D33D2F';
          break;
        case 'flying':
          typeColorHead = '#9AC3DF';
          typeColorBody = '#C9DEEE';
          break;
        case 'poison':
          typeColorHead = '#632C7C';
          typeColorBody = '#773497';
          break;
        case 'ground':
          typeColorHead = '#B77017';
          typeColorBody = '#D4921E';
          break;
        case 'rock':
          typeColorHead = '#4C5555';
          typeColorBody = '#616b6b';
          break;
        case 'bug':
          typeColorHead = '#1cb090';
          typeColorBody = '#35cca9';
          break;
        case 'ghost':
          typeColorHead = '#a8b0b8';
          typeColorBody = '#ccd1d5';
          break;
        case 'steel':
          typeColorHead = '#2f475d';
          typeColorBody = '#35526f';
          break;
        case 'fire':
          typeColorHead = '#ec9c33';
          typeColorBody = '#f0b559';
          break;
        case 'water':
          typeColorHead = '#55a6db';
          typeColorBody = '#90c4e9';
          break;
        case 'grass':
          typeColorHead = '#35cca9';
          typeColorBody = '#65e3c2';
          break;
        case 'electric':
          typeColorHead = '#f5dd54';
          typeColorBody = '#f9ec8e';
          break;
        case 'psychic':
          typeColorHead = '#d690d2';
          typeColorBody = '#e7bae5';
          break;
        case 'ice':
          typeColorHead = '#55a6db';
          typeColorBody = '#90c4e9';
          break;
        case 'dragon':
          typeColorHead = '#c94639';
          typeColorBody = '#dd6256';
          break;
        case 'dark':
          typeColorHead = '#2f475b';
          typeColorBody = '#31536d';
          break;
        case 'fairy':
          typeColorHead = '#52d689';
          typeColorBody = '#8beab3';
          break;
        case 'unknown':
          typeColorHead = '#f3bfae';
          typeColorBody = '#f9dacf';
          break;
        case 'shadow':
          typeColorHead = '#838d8d';
          typeColorBody = '#acb3b4';
          break;
      };
      this.setState({
        pokeData: pokemonData,
        loading: false,
        image: pokemonData.sprites.other['official-artwork']['front_default'],
        typeColorHead: typeColorHead,
        typeColorBody: typeColorBody,
        estadisticas: [
          pokemonData.stats[0].base_stat,
          pokemonData.stats[1].base_stat,
          pokemonData.stats[2].base_stat,
          pokemonData.stats[3].base_stat,
          pokemonData.stats[4].base_stat,
          pokemonData.stats[5].base_stat,
        ],
      });
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }

  render() {
    const { pokeData, loading, image, estadisticas, typeColorHead, typeColorBody } = this.state;
    const name =
      pokeData['name']?.charAt(0).toUpperCase() + pokeData['name']?.slice(1);
    const tipos = pokeData.types?.map((tipo) => {
      const color = [
        '#CCD1D1',
        '#922B21',
        '#5499C7',
        '#5B2C6F',
        '#935116',
        '#424949',
        '#16A085',
        '#808B96',
        '#2C3E50',
        '#E67E22',
        '#2E86C1',
        '#148F77',
        '#F4D03F',
        '#C569BD',
        '#2E86C1',
        '#B03A2E',
        '#212F3C',
        '#2ECC71',
        '#E9967A',
        '#707B7C',
      ];
      var lastColor = '';
      const type = [
        'normal',
        'fighting',
        'flying',
        'poison',
        'ground',
        'rock',
        'bug',
        'ghost',
        'steel',
        'fire',
        'water',
        'grass',
        'electric',
        'psychic',
        'ice',
        'dragon',
        'dark',
        'fairy',
        'unknown',
        'shadow',
      ];
      for (let i = 0; i < type.length; i++) {
        if (type[i] == tipo.type.name) {
          lastColor = color[i];
          break;
        }
      }
      return (
        <View style={styles.typesPorColumna}>
          <ImageBackground style={{ backgroundColor: lastColor, height: 50, justifyContent: 'center' }} source={{ uri: "https://static.wikia.nocookie.net/pokemongo/images/c/c4/Acero.png/revision/latest/scale-to-width-down/30?cb=20161104211011&path-prefix=es" }}>
            <View>
              <Text style={styles.textTypes}>{tipo.type.name}</Text>
            </View>
          </ImageBackground>
        </View>
      );
    });

    const abilities = pokeData.abilities?.map((habilidades) => {
      return (
        <View style={styles.abilitiesPorFila}>
          <Text style={styles.textAbilities}>{habilidades.ability.name}</Text>
        </View>
      );
    });
    const stats = pokeData.stats?.map((stats) => {
      return (
        <View style={styles.caractColumn}>
          <Text style={styles.textAbilities}>{stats.stat.name}: </Text>
          <Text style={styles.textAbilities}>{stats.base_stat}</Text>
        </View>
      );
    });
    if (!loading) {
      return (
        <View style={{ backgroundColor: typeColorHead }}>
          <View style={styles.row}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.typesCompleto}>{tipos}</View>
          <View style={styles.rowImage}>
            <Image
              style={styles.card}
              source={{
                uri: image,
              }}
            />
          </View>
          <View style={{ backgroundColor: typeColorBody, alignContent: 'center', flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 25 }}>Habilidades:</Text>
          </View>
          <View style={{ backgroundColor: typeColorBody, flexDirection: "row", }}>{abilities}</View>
          <View style={styles.caractColumn}>
            <Text style={{ backgroundColor: typeColorBody }}>Weight: {pokeData['weight']} cm</Text>
            <Text style={{ backgroundColor: typeColorBody }}>Height: {pokeData['height']} cm</Text>
          </View>
          {stats}
        </View>
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

export default Pokemon;
