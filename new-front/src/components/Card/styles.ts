import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  max-width: 300px;
  min-height: 160px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid transparent;
  box-shadow: 0px 111.167px 88.9337px
      ${(props) => props.theme.colors.cardShadow1},
    0px 72.0528px 52.0839px ${(props) => props.theme.colors.cardShadow2},
    0px 42.82px 28.327px ${(props) => props.theme.colors.cardShadow3},
    0px 22.2334px 14.4517px ${(props) => props.theme.colors.cardShadow4},
    0px 9.05807px 7.24645px ${(props) => props.theme.colors.cardShadow5},
    0px 2.05865px 3.49971px ${(props) => props.theme.colors.cardShadow6};
  padding: 28px;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transition: border ease-in-out 200ms;
    border: 1px solid ${(props) => props.theme.colors.cardHoverBorder};
    box-shadow: 0px 0px 25px 10px
      ${(props) => props.theme.colors.cardHoverBorderShadow};
  }

  h4 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: ${(props) => props.theme.colors.cardH4};
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.cardSpan};
  }

  div {
    margin-top: auto;
    display: flex;

    small {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: ${(props) => props.theme.colors.cardSmall};
      display: flex;

      &:last-child {
        margin-left: 12px;
      }

      &.zero {
        color: ${(props) => props.theme.colors.notInformed};
      }

      &.goUp {
        color: ${(props) => props.theme.colors.goUp};
      }

      &.goDown {
        color: ${(props) => props.theme.colors.goDown};
      }
    }
  }

  button {
    all: unset;
    position: absolute;
    cursor: pointer;
    top: 12px;
    right: 12px;

    background: ${(props) => props.theme.colors.cardButtonBackground};
    border-radius: 50%;

    font-size: 20px;
    line-height: 15px;
    color: ${(props) => props.theme.colors.cardButton};
    padding: 12px;
  }
`;
