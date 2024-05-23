import styled from "styled-components"

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.colorTwo};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
}
`
export const BtnPesquisa = styled.button`
  background-color: ${(props) => props.theme.colorOne};
  border: 1px solid ${(props) => props.theme.colorOne};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.colorTwo};
  margin-left: 8px;
  cursor: pointer;
`

export const InputPesquisa = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.colorOne};
}
`