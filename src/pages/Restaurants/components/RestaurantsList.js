import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {loadRestaurants} from '../../..//store/restaurants/actions';

export const RestaurantsList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <div>
      RestaurantsList
      <ul>
        {restaurants?.map(restaurant => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
});
const mapDispatchToProps = {loadRestaurants};
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);
