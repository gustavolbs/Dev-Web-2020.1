import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.sidebarBackground};
  color: ${(props) => props.theme.colors.sidebarText};
  position: fixed;
  z-index: 100;
  padding: 2.5rem 1.75rem;
  font-family: "Open Sans", sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  top: 0;

  .logo {
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
  }

  div {
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.sidebarTextInactive};
      font-size: 15px;
      line-height: 19px;
      font-weight: 400;
    }
  }

  div.active a,
  div a:hover {
    color: ${(props) => props.theme.colors.sidebarText};
    transition: color ease-in-out 200ms;
  }

  div:first-child {
    margin-bottom: 4rem;

    a {
      color: ${(props) => props.theme.colors.sidebarText};
    }
  }

  div:not(:first-child) {
    margin-top: 1rem;
  }

  div:last-child {
    margin-top: auto;
  }

  button {
    all: unset;
    display: none;
    position: absolute;
    cursor: pointer;
    top: 34px;
    right: 28px;

    background: ${(props) => props.theme.colors.cardButtonBackground};
    border-radius: 50%;

    font-size: 20px;
    line-height: 15px;
    color: ${(props) => props.theme.colors.cardButton};
    padding: 12px;
  }

  @media screen and (max-width: 600px) {
    height: 100px;
    width: 100vw;
    overflow: hidden;
    transition: height 300ms ease-in-out;

    &.menuOpen {
      height: 100vh;
    }

    button {
      display: flex;
    }
  }
`;

export const Input = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  input {
    margin-top: 4px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.cardHoverBorder};
    outline: none;
    border-radius: 4px;
    padding: 8px;
    color: ${(props) => props.theme.colors.cardH4};

    &:focus {
      box-shadow: 0px 0px 25px 10px
        ${(props) => props.theme.colors.cardHoverBorderShadow};
    }
  }
`;
