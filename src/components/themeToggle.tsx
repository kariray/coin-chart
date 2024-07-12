import { useRecoilState } from "recoil";
import styled from "styled-components";
import { themeMode } from "../states/themeMode";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 30px;
`;

const ToggleButton = styled.div`
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid skyblue;
`;

function ThemeToggle() {
  const [mode, setMode] = useRecoilState(themeMode);

  const toggleThemeMode = () => {
    setMode(!mode);
  };
  return (
    <>
      <Container>
        <ToggleButton onClick={toggleThemeMode}>
          {mode ? "dark" : "light"}
        </ToggleButton>
      </Container>
    </>
  );
}

export default ThemeToggle;
