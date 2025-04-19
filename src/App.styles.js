import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #e4e4e7;
        color : ${(theme) => theme.text};
        
    }
    
    h1, h2, h3, input, button {
            font-family: "Press Start 2P", system-ui;
    }
    h1 { text-align: center; }
    
    header {
        display: flex;
        align-items: stretch;
        border: 2px solid #333;
        border-radius: 14px;
        padding: 14px;
        background-color: #1e1e1e;
    }
    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 14px;
        background: ${({ theme }) => theme.background};
        gap: 14px;
    }
    body {
        background: ${(theme) => theme.background}
        transition : all 0.3s ease;
    }
`;

export const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 14px;
  gap: 14px;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: stretch;
  max-width: 800px;
  width: 100%;
  margin: 12px auto;
  gap: 14px;
`;

export const StyledInput = styled.input`
  flex: 1;
  border-radius: 14px;
  padding: 14px 18px;
  border: none;
  background: ${(theme) => theme.inputBackground};
  color: ${(theme) => theme.text};
`;

export const StyledButton = styled.button`
  border-radius: 14px;
  background: ${(theme) => theme.buttonBackground};
  padding: 14px 18px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 800px;
  width: 100%;
  margin: 12px auto;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border-radius: 14px;
  background: ${({ theme }) => theme.cardBackground};
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const ToggleThemeButton = styled(StyledButton)`
  margin-top: 20px;
  font-size: 1rem;
`;
