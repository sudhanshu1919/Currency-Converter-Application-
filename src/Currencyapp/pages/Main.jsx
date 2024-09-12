import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/bg.png";
import { currencyCodes } from "../Data";

function Main() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NPR");
  const [result, setResult] = useState(null);

  const handleExchangeRate = () => {
    const exchangeRate = 133.72;
    setResult(
      `${amount} ${fromCurrency} = ${(amount * exchangeRate).toFixed(
        2
      )} ${toCurrency}`
    );
  };

  return (
    <Container>
      <Card>
        <Title>Currency Converter</Title>
        <Input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Container2>
          <Select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencyCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </Select>
          <SwapButton
            onClick={() => {
              const temp = fromCurrency;
              setFromCurrency(toCurrency);
              setToCurrency(temp);
            }}
          >
            ⇄
          </SwapButton>
          <Select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencyCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </Select>
        </Container2>
        <Button onClick={handleExchangeRate}>Get Exchange Rate</Button>
        {result && <Result>{result}</Result>}
        <Text>Designed By Sudhanshu Gaikwad</Text>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url(${img}) no-repeat center center;
  background-size: cover; /* Ensure the background image covers the entire container */
  background-attachment: fixed; /* Fix the background when scrolling */
  padding: 20px;

  @media (max-width: 768px) {
    height: auto; /* Adjust height for smaller screens */
    padding: 20px;
  }
`;

const Card = styled.div`
  background-color: rgba(31, 31, 43, 0.7); /* Semi-transparent background */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 350px;
  color: #fff;
  text-align: center;
  backdrop-filter: blur(10px); /* Blur effect */
  margin: auto; /* Center card horizontally */

  @media (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
    padding: 30px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #ff6f61;

  @media (max-width: 768px) {
    font-size: 20px; /* Adjust title size for smaller screens */
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  border: none;
  border-radius: 5px;
  background-color: #2c2c38;
  color: white;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column; /* Stack vertically by default */

  @media (max-width: 768px) {
    flex-direction: row; /* Inline blocks on smaller screens */
    justify-content: space-between;
    align-items: center;
    gap: 10px; /* Add some space between elements */
  }
`;

const Select = styled.select`
  padding: 10px;
  width: 100%; /* Full width by default */
  margin: 10px 0; /* Vertical spacing */

  @media (max-width: 768px) {
    width: 45%; /* Adjust width for smaller screens */
    margin: 0; /* Remove vertical spacing */
  }
`;

const SwapButton = styled.button`
  border: none;
  background-color: transparent;
  color: #ff6f61;
  font-size: 20px;
  cursor: pointer;
  margin: 10px 0; /* Vertical spacing */

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e85b55;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Text = styled.p`
  color: aliceblue;
  font-family: Arial, Helvetica, sans-serif;
`;

export default Main;
