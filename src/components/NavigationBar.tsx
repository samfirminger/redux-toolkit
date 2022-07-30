import React from "react";
import styled from "styled-components";
import { RouteType } from "../types/types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
`;

const Section = styled.div<{ selected: boolean }>`
  font-size: 20px;
  margin-right: 50px;
  padding: 5px;
  border: 1px solid rebeccapurple;
  border-radius: 5px;
  cursor: pointer;
  ${({ selected }) => (selected ? `background-color: mediumpurple` : ``)}
`;

interface NavigationBarProps {
  route: RouteType;
  setRoute: (routeType: RouteType) => void;
}

const NavigationBar = ({ route, setRoute }: NavigationBarProps) => (
  <Container>
    <Section
      selected={route === RouteType.BEHAVIOUR}
      onClick={() => setRoute(RouteType.BEHAVIOUR)}
    >
      Behaviour
    </Section>
    <Section
      selected={route === RouteType.AUDIENCE}
      onClick={() => setRoute(RouteType.AUDIENCE)}
    >
      Audience
    </Section>
  </Container>
);

export default NavigationBar;
