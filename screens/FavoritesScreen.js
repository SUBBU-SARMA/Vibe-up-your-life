//import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealsList from '../components/MealsList/MealsList';
//import FavoriteMealsCtx from '../store/context/favorite-context';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

function FavoritesScreen() {
  //const favortieMealsCtx = useContext(FavoriteMealsCtx);
  const favoritesMealIds = useSelector((state) => state.favoritesMealIds.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    //favortieMealsCtx.ids.includes(meal.id)
    favoritesMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals Yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
