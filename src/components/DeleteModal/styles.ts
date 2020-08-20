import styled from 'styled-components';

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => !props.open && `visibility: hidden`};
`;

export const Content = styled.div`
  width: 47%;
  height: 40%;
  padding: 30px;
  background: var(--background-color);
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 24px;
    line-height: 36px;
    color: var(--text-color);
    font-weight: 600;
    margin-bottom: 30px;
  }

  span {
    font-size: 16px;
    line-height: 36px;
    color: var(--text-color);
    margin-bottom: 30px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .cancel {
      width: 176px;
      height: 40px;
      font-weight: 600;
      color: var(--text-color);
      border: 1px solid var(--text-color);
      background: var(--background-color);
      margin-right: 25px;
    }

    .delete {
      width: 176px;
      height: 40px;
      font-weight: 600;
      color: var(--background-color);
      border: 0;
      background: var(--text-color);
    }
  }
`;
