import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 448px;
  height: 408px;
  border: 1px solid #212121;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 235px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      color: #212121;
      line-height: 18px;
      font-weight: 600;
      margin-bottom: 3px;
    }

    input {
      height: 40px;
      border: 1px solid #212121;
      padding: 10px;
      font-size: 16px;
    }
  }

  button {
    width: 100%;
    height: 40px;
    margin-top: 40px;
    background: #212121;
    color: #ffffff;
    font-weight: bold;
    line-height: 24px;
    border: 0;
  }
`;
