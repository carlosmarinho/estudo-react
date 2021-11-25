import styled from "styled-components";


export const Form = styled.form`
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  padding: 30px 50px;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-height: 90px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 10px;
  width: 16%;
  margin-right: 10px;
`;

export const Label = styled.label`
  color: #3d3d3d;
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin: 10px 10px 10px 0;
  width: 10%;
`;

export const Button = styled.button`
width: 50%;
border-radius: 5px;
padding: 10px;
margin: 10px auto 0;
background-color: #ff6315;
border: 1px solid #fff;
color: #fff;
font-weight: bold;
`;
