import styled from "styled-components";
import restaurant from "../../assets/restaurant.jpg";
const Container = styled.div`
  background-image: url(${restaurant});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
  padding: 0 auto;
  margin: 0 auto;
`;

export default Container;
