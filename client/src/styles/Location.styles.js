import styled from "styled-components";

export const LocationSection = styled.section`
  margin: 5rem;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;

  @media screen and (max-width: 480px) {
    margin: 1rem;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: -1rem;
  left: 33%;
  justify-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
  margin-bottom: 25px;
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
  }
  p {
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: 0.1rem;
      font-weight: bold;
    }

    @media screen and (max-width:  480px) {
      position: initial;
      background-color: transparent;
    }
`;

export const Container = styled.div`
  margin: 0.5rem;
  padding-top: 3rem;
  padding-bottom: 4vw;
  background-color: white;
  border-radius: 1rem;
`;
export const Locations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6vw;
  margin-top: 3vw;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;


export const Restaurant = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;
export const RestaurantImage = styled.img`
  overflow: hidden;
  width: max-content;
  max-height: 10rem;
  border-radius: 10rem;
`;
export const RestaurantHeading = styled.div`
  font-size: 1.1rem;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
`;
