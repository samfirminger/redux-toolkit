import React from "react";
import styled from "styled-components";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  padding: 5px;
  margin-top: 10px;
`

const Label = styled.div`
  font-size: 15px;
`

export const Tab = styled.div`
  margin-top: 50px;
`

const BehaviourTab = () => {
  return (
    <Tab>
      <InputGroup>
        <Label>Message Name</Label>
        <Input type={"text"} />
      </InputGroup>
    </Tab>
  );
};

export default BehaviourTab;
