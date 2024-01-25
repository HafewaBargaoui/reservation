import { useState } from "react";
import "./style.css";
import {
  SForm,
  SFormTitle,
  SLabel,
  SInput,
  SFormControl,
  SButton,
  SFormText,
} from "./styles/Reservation.styled";
const Reservation = () => {
  const couvertsOptions = [
    { value: "1", label: "1 couvert" },
    { value: "2", label: "2 couverts" },
    { value: "3", label: "3 couverts" },
    { value: "4", label: "4 couverts" },
  ];
  const HeureOptions = [
    { value: "19:00:00", label: "à 19:00" },
    { value: "19:30:00", label: "à 19:30" },
    { value: "20:00:00", label: "à 20:00" },
    { value: "20:30:00", label: "à 20:30" },
    { value: "21:00:00", label: "à 21:00" },
    { value: "21:30:00", label: "à 21:30" },
    { value: "22:00:00", label: "à 22:00" },
  ];

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedHourValue, setSelectedHourValue] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleSelectHourChange = (event) => {
    setSelectedHourValue(event.target.value);
  };
  const handleMessageChange = (event) => {
    setEnteredMessage(event.target.value);
  };

  const handleReservation = () => {
    alert(
      `Selected value: ${selectedValue}\nselected Hour${selectedHourValue} \nEntered message: ${enteredMessage}`
    );
  };

  return (
    // <StyledReservation>
    <SForm>
      <SFormTitle>Yūgen se réjouit à l'idée de vous revoir bientôt.</SFormTitle>
      <SFormText>
        Pour les réservations de groupes dépassant quatre personnes et les
        demandes de privatisation, nous vous prions de bien vouloir nous
        contacter par téléphone au 03 47 20 00 01. Nous nous tenons à votre
        disposition pour répondre à toutes vos demandes avec le plus grand
        plaisir.
      </SFormText>
      <SFormControl>
        <select
          className="bg-dark-blue text-white border-0 px-2 py-1"
          onChange={handleSelectChange}
        >
          {couvertsOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          className="bg-dark-blue text-white border-0 px-2 py-1"
          onChange={handleSelectHourChange}
        >
          {HeureOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <SLabel>Un message à nous faire passer ?</SLabel>
        <SInput onChange={handleMessageChange}></SInput>
      </SFormControl>
      <SButton onClick={handleReservation}>Réserver</SButton>
    </SForm>
    // </StyledReservation>
  );
};

export default Reservation;
