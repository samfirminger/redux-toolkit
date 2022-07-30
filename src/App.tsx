import React, { useState } from "react";
import styled from "styled-components";
import { RouteType } from "./types/types";
import BehaviourTab from "./components/BehaviourTab";
import AudienceTab from "./components/AudienceTab";
import NavigationBar from "./components/NavigationBar";

const AppContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const App = () => {
  const [route, setRoute] = useState(RouteType.BEHAVIOUR);
  return (
    <AppContainer>
      <NavigationBar route={route} setRoute={setRoute} />
      {route === RouteType.BEHAVIOUR && <BehaviourTab />}
      {route === RouteType.AUDIENCE && <AudienceTab />}
    </AppContainer>
  );
};

export default App;
