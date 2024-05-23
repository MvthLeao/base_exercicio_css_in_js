import styled from "styled-components";

export const Vagas = styled.li`
  border: 1px solid ${(props) => props.theme.colorOne};
  background-color: ${(props) => props.theme.colorTwo};
  color: ${(props) => props.theme.colorOne};
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

  :hover {
    background-color: ${(props) => props.theme.colorOne};
    color: ${(props) => props.theme.colorTwo};

    a {
      border-color: ${(props) => props.theme.colorOne};
      background-color: ${(props) => props.theme.colorTwo};
      color: ${(props) => props.theme.colorOne};
    }
  }
`

export const TituloVaga = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const LinkVaga = styled.a`
  border-color: ${(props) => props.theme.colorTwo};
  background-color: ${(props) => props.theme.colorOne};
  color: ${(props) => props.theme.colorTwo};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
    }
`