import { useState } from "react";
import "moment/locale/fr";
import "dayjs/locale/fr";
import locale from "antd/es/date-picker/locale/fr_FR";
import { DatePicker, Modal } from "antd";
import "antd/dist/reset.css";
import {
  SForm,
  SFormTitle,
  SLabel,
  SButton,
  SFormText,
  SSelect,
  STextArea,
  SLogo,
  SFormContainer,
  SSelectContainer,
} from "./styles/Reservation.styled";

const Reservation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReservation = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const disabledDate = (current) => {
    // Disable dates before today
    return current && current <= new Date();
  };
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
  const [selectedDateValue, setSelectedDateValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSelectHourChange = (event) => {
    setSelectedHourValue(event.target.value);
  };

  const handleMessageChange = (event) => {
    setEnteredMessage(event.target.value);
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDateValue(dateString);
  };
  return (
    <SFormContainer>
      <SLogo />
      <SForm>
        <SFormTitle>
          Yūgen se réjouit à l'idée de vous revoir bientôt.
        </SFormTitle>
        <SFormText>
          Pour les réservations de groupes dépassant quatre personnes et les
          demandes de privatisation, nous vous prions de bien vouloir nous
          contacter par téléphone au 03 47 20 00 01. Nous nous tenons à votre
          disposition pour répondre à toutes vos demandes avec le plus grand
          plaisir.
        </SFormText>
        <SSelectContainer>
          <SSelect onChange={handleSelectChange}>
            {couvertsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SSelect>
          <DatePicker
            locale={locale}
            format="dddd D MMMM YYYY"
            disabledDate={disabledDate}
            onChange={handleDateChange}
            style={{
              height: "auto",
              width: "auto",
              cursor: "pointer",
              borderRadius: "0px",
              marginLeft: "5px",
              marginRight: "5px",
              fontSize: "17px",
            }}
          />
          <SSelect onChange={handleSelectHourChange}>
            {HeureOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SSelect>
        </SSelectContainer>
        <SLabel>Un message à nous faire passer ?</SLabel>
        <STextArea
          onChange={handleMessageChange}
          rows={3}
          cols={33}
        ></STextArea>

        <SButton onClick={handleReservation}>Réserver</SButton>
        <Modal
          title="Récapitulatif de votre réservation"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Nombre de couverts : {selectedValue}</p>
          <p>Date de réservation : {selectedDateValue}</p>
          <p>Heure de réservation : {selectedHourValue}</p>
          <p>Informations supplémentaires : {enteredMessage}</p>
        </Modal>
      </SForm>
    </SFormContainer>
  );
};
export default Reservation;
