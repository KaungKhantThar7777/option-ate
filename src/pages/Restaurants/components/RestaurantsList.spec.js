import {RestaurantsList} from './RestaurantsList';
import {render, screen} from '@testing-library/react';

describe('RestaurantsList', () => {
  const restaurants = [
    {
      id: 1,
      name: 'Sushi Place',
    },
    {
      id: 2,
      name: 'Pizza Place',
    },
  ];
  let loadRestaurants;

  function renderComponent() {
    loadRestaurants = jest.fn().mockName('loadRestaurants');

    render(
      <RestaurantsList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
  }

  it('loads restaurants on first render', () => {
    renderComponent();
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('display the restaurants', () => {
    renderComponent();

    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.getByText('Pizza Place')).toBeInTheDocument();
  });
});
