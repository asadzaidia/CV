import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  cursor: pointer;
`;

type AchoredDivType = {
  children: React.ReactNode;
};

const AchoredDiv: React.FC<AchoredDivType> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default AchoredDiv;
