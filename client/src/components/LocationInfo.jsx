import React from "react";
import { Button } from "../styles/Button.styles";

import {
  LocationSection,
  Title,
  Container,
  Locations,
  Restaurant,
  RestaurantImage,
  RestaurantHeading,
} from "../styles/Location.styles";

const LocationInfo = ({ restaurants }) => {
  return (
    <LocationSection>
      <Container>
        <Title>
          <h1>Locations</h1>
          <p>Visit all our Houston Loactions</p>
        </Title>
        <Locations>
          {restaurants.map((restaurant, index) => (
            <Restaurant key={index}>
              <RestaurantImage src={restaurant.image} />
              <RestaurantHeading>{restaurant.heading}</RestaurantHeading>
              <Button primary='true'>Order Now</Button>
            </Restaurant>
          ))}
        </Locations>
      </Container>
    </LocationSection>
  );
};

export default LocationInfo;
