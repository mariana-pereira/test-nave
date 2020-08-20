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
  height: 26%;
  padding: 30px;
  background: var(--background-color);
  display: flex;
  position: relative;

  .message {
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
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 30px;

    button {
      border: 0;
      background: none;

      img {
        width: 14px;
        height: 14px;
      }
    }
  }
`;
