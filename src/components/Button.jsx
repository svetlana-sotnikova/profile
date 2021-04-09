import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  background: linear-gradient(180deg, #20b94b 0%, #188837 100%);
  box-shadow: inset 0px 0px 2px #000000;
  border: none;
  border-radius: 100px;
  padding: 24px 36px;
  font: inherit;
  cursor: pointer;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
