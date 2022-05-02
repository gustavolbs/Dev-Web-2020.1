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

  & > span:first-child {
    margin-bottom: 10px;
  }

  .react-loading-skeleton {
    --base-color: ${(props) => props.theme.colors.skeletonBackground};
    --highlight-color: ${(props) => props.theme.colors.skeletonHighlight};
  }

  & > span:last-child {
    display: flex;
    align-items: center;
    margin-top: auto;
  }

  @media screen and (max-width: 900px) {
    max-width: calc(50% - 6px);
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;
