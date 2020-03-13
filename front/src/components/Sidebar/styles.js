import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  position: fixed;
  transition: width 600ms ease;
  overflow: scroll;
  z-index: 100;

  :hover {
    ul {
      li:first-child svg {
        transform: rotate(-180deg);
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    li + li {
      width: 100%;
    }

    li {
      a {
        display: flex;
        align-items: center;
        height: 5rem;
        color: var(--text-primary);
        text-decoration: none;
        filter: grayscale(100%) opacity(0.7);
        transition: var(--transition-speed);

        span {
          display: none;
          font-weight: bold;
          margin-left: 1rem;
        }

        svg {
          width: 2rem;
          min-width: 2rem;
          margin: 0 1.5rem;

          .fa-primary {
            color: #ff7eee;
          }

          .fa-secondary {
            color: #df49a6;
          }

          .fa-primary,
          .fa-secondary {
            transition: var(--transition-speed);
          }
        }
      }

      a:hover {
        filter: grayscale(0%) opacity(1);
        background: var(--bg-secondary);
        color: var(--text-secondary);
      }
    }

    li:first-child {
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 1rem;
      text-align: center;
      color: var(--text-secondary);
      background: var(--bg-secondary);
      font-size: 1.5rem;
      letter-spacing: 0.3ch;
      width: 100%;

      svg {
        transform: rotate(0deg);
        transition: var(--transition-speed);
      }

      span {
        display: inline;
        position: absolute;
        left: -999px;
        transition: var(--transition-speed);
      }
    }

    li:last-child {
      margin-top: auto;
    }
  }

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;

    ul {
      flex-direction: row;

      li:first-child {
        display: none;
      }

      li {
        a {
          justify-content: center;
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    top: 0;
    width: 5rem;
    height: 100vh;

    :hover {
      width: 16rem;

      ul {
        li:first-child {
          span {
            left: 0px;
          }
          svg {
            margin-left: 11rem;
          }
        }

        li a span {
          display: inline;
        }
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
