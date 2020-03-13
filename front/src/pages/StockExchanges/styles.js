import styled from "styled-components";

export const Container = styled.div`
  margin-left: 5rem;
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    margin: 0;
    margin-bottom: 5rem;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    min-width: 250px;
    max-width: 250px;
  }

  @media only screen and (max-width: 600px) {
    div {
      min-width: 180px;
      max-width: 180px;
    }
  }
`;
