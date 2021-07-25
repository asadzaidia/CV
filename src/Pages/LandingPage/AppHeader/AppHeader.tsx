import React from "react";

import { Col, Row, Input } from "antd";
import DayDarkMode from "./DayDarkMode";
import AchoredDiv from "../../../shared/AchoredDiv/AchoredDiv";

const AppHeader: React.FC = () => {
  return (
    <Row justify="end">
      <Col>
        <AchoredDiv>
          <DayDarkMode darkModeEnabled={false} />
          <Input />
        </AchoredDiv>
      </Col>
    </Row>
  );
};

export default AppHeader;
