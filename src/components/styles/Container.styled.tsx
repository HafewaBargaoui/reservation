import styled from "styled-components";
import restaurant from "../../assets/restaurant.jpg";
const Container = styled.div`
  background-image: url(${restaurant});
  background-size: cover;
  background-position: center center;
  width: 100%;
  min-height: 100vh; /* Use min-height instead of height */
  padding: 0 auto;
  margin: 0 auto;
  overflow: hidden; /* Add this line */
  padding-top: 40px;
`;

export default Container;
