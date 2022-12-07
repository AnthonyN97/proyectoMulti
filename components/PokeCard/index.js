import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styles';

const PokeCard = ({ name, navigation, url }) => {
  const nameMayus = name.charAt(0).toUpperCase() + name.slice(1)
  var image = url.slice(34)
  image = image.replace("/","")
  return (
    <TouchableOpacity
      testID="poke-card"
      style={{ backgroundColor: 'transparent' }}
      onPress={() => navigation.navigate('Pokemon', { name, url })}>
      <View style={styles.listItemContainer}>
        <View style={styles.pokeCardText}>
          <Text style={styles.pokeItemHeader}>{nameMayus}</Text>
        </View>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+image+'.png',
          }}
          style={styles.pokeImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PokeCard;
