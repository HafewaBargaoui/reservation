import styled from "styled-components";
import { btnReset } from "./Variables";
import logo_yugen from "../../assets/logo_yugen.png";
export const SForm = styled.form``;
import { Button } from "antd";
export const SFormTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  white-space: normal;
  line-height: 1.4;
  @media (max-width: 600px) {
    font-size: 18px;
    margin-letf: 4px;
    margin-right: 4px;
  }
`;

export const SLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const STextArea = styled.textarea`
  outline: none;
  font-size: 14px;
  width: 70%;
  box-sizing: border-box;
  margin: 0 auto;
  display: block;
`;

export const SButton = styled(Button)`
  ${btnReset};
  background: #ff492d;
  border-radius: 10px;
  color: white;
  padding: 6px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
`;

export const SFormText = styled.p`
  text-align: center;
  line-height: 1.5;
`;

export const SSelect = styled.select`
  background-color: #001f3f;
  color: #ffffff;
  border: 0;
  padding: 0.25rem;
  margin: 0 5px;
  cursor: pointer;
`;
export const SSelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const SLogo = styled.div`
  background-image: url(${logo_yugen});
  width: 100px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
`;

export const SFormContainer = styled.div`
  background-color: white;
  padding-top: 30px;
  padding-bottom: 20px;
  width: 80%;
  max-width: 800px;
  margin: auto;
  @media (max-width: 600px) {
    height: 80vh;
  }
`;
