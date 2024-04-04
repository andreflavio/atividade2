import styled from "styled-components";
import RGB from "./pages/RGB";
import HSLA from "./pages/HSLA";

export default function App() {
  return (
    <WrapperSld>
      <RGB />
      <HSLA />
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
