import styled from "styled-components";

const Toggle = styled.button`
  background: transparent;
  font-size: 34px;
  border: none;
  cursor: pointer;
  top: 60px;
  right: 20rem;
  position: fixed;
  top: 26px;
  right: 86px;
  z-index: 1000;
`;

const Content = styled.p`
  font-family: "Press Start 2P", system-ui;
  font-size: 22px;
  margin-top: 14px;
`;

const Icon = styled.i`
  font-size: 50px;
`;

const ToggleTheme = ({ toggleMode, handleSetTheme }) => {
  return (
    <>
      {toggleMode === "dark" ? (
        <Toggle className="toggle" onClick={handleSetTheme}>
          <Icon className="fa-solid fa-toggle-on" />
          <Content>Dark</Content>
        </Toggle>
      ) : (
        <Toggle className="toggle" onClick={handleSetTheme}>
          <Icon className="fa-solid fa-toggle-off" />
          <Content>Light</Content>
        </Toggle>
      )}
    </>
  );
};

export default ToggleTheme;
