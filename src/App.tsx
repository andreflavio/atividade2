/*
import styled from "styled-components";
import RGB from "./pages/RGB";
import HSLA from "./pages/HSLA";
import CMYK from "./pages/CMYK";

export default function App() {
  return (
    <WrapperSld>
      <RGB />
      <HSLA />
      <CMYK />
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import RGB from "./pages/RGB";
import HSLA from "./pages/HSLA";
import CMYK from "./pages/CMYK";

export default function App() {
  return (
    <Router>
      <WrapperSld>
        <Routes>
          <Route path="/rgb" element={<RGB />} />
          <Route path="/hsla" element={<HSLA />} />
          <Route path="/cmyk" element={<CMYK />} />
        </Routes>
      </WrapperSld>
    </Router>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
