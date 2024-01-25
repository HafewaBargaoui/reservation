import styled from "styled-components";
import { btnReset } from "./Variables";

// const StyledReservation = styled.div`
//   background-color: #fff;
//   width: 500px;
//   height: 500px; /* Set a height if needed */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   h1 {
//     color: red;
//   }
// `;

// export default StyledReservation;
export const SForm = styled.form`
  width: 100%;
  background: white;
`;
export const SFormTitle = styled.span`
  font-size: 24px;
  font-wight: 600;
`;
export const SFormControl = styled.div``;

export const SLabel = styled.label`
  display: block;
  font-size: 14px;
`;
export const SInput = styled.input`
  outline: none;
  font-size: 14px;
`;
export const SButton = styled.button`
  ${btnReset};
  background: #ff492d;
  border-radius: 10px;
  color: white;
  padding: 6px;
`;
export const SFormText = styled.p`
  font-size: 16px;
`;
