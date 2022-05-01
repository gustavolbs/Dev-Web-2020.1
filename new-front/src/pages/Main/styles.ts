import styled from "styled-components";

export const Container = styled.div`
  margin-left: 13rem;
  padding: 2.5rem 1.75rem;

  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 2rem;
  }

  h2:not(:first-child) {
    margin-top: 4rem;
  }

  @media only screen and (max-width: 600px) {
    margin: 0;
    margin-bottom: 5rem;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

  /* div {
    max-width: 250px;
  }

  @media only screen and (max-width: 600px) {
    div {
      max-width: 150px;
    }
  } */
`;
