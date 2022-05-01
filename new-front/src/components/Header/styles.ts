import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  p {
    margin-top: 1rem;
    font-family: "Open sans", sans-serif;
    font-weight: 400;

    & + p {
      color: ${(props) => props.theme.colors.goDown};
    }
  }

  button {
    all: unset;
    width: max-content;
    padding: 0.5rem;
    margin-top: 1.25rem;
    cursor: pointer;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.headerButtonBackground};
    color: ${(props) => props.theme.colors.headerButtonColor};
    padding: 1.25rem 2rem;
    font-size: 16px;
    line-height: 15px;
    box-shadow: 0px 0px 25px 10px
      ${(props) => props.theme.colors.cardHoverBorderShadow};
  }
`;
