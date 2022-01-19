import React from "react";
import { Button } from "../styles/Button.styles";
import {
  LocationSection,
  LocationWrapper,
  Restaurants,
  LocationImg,
  LocationHeading,
} from "../styles/Location.styles";
import { Title } from "../styles/Title.styles"

const Locations = ({ restaurants }) => {
  return (
    <LocationSection>
      <Title>
        <h1>Locations</h1>
        <p>
          Visit us at all our upcoming Loacions
        </p>
      </Title>

      <Restaurants>
        <LocationWrapper>
          {restaurants.map((restaurant, index) => (
            <Restaurants key={index}>
              <LocationImg src={restaurant.image} />
              <LocationHeading>{restaurant.heading}</LocationHeading>
              <Button primary='true'>{restaurant.buttonLabel}</Button>
            </Restaurants>
          ))}
        </LocationWrapper>
      </Restaurants>
    </LocationSection>
  );
};

export default Locations;
