import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 408px;

  .form-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    h1 {
      font: 24px Montserrat;
      font-weight: 600;
      color: var(--text-color);
      margin-left: 20px;
    }
  }

  .input-container {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(2, 1fr);

    div {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 600;
        margin-bottom: 3px;
        color: var(--text-color);
        line-height: 18px;
      }

      input {
        width: 280px;
        height: 40px;
        border: 1px solid var(--text-color);
        padding: 10px;
        font-size: 16px;
      }
    }
  }

  .button-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      width: 176px;
      height: 40px;
      background: var(--text-color);
      border: 0;
      color: var(--background-color);
      font-weight: 600;
      line-height: 24px;
      margin-top: 30px;
    }
  }
`;
