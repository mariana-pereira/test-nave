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
  width: 80%;
  height: 80%;
  background: var(--background-color);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Naver = styled.div`
  padding: 20px 20px 30px 30px;

  .close {
    display: flex;
    justify-content: flex-end;

    img {
      width: 14px;
      height: 14px;
    }
  }

  .naver-info {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 24px;
      line-height: 36px;
      font-weight: 600;
      color: #000000;
    }

    span {
      font-size: 16px;
      line-height: 24px;
      color: var(--text-color);
      margin-top: 20px;
    }

    strong {
      font-size: 16px;
      line-height: 24px;
      color: var(--text-color);
      font-weight: 600;
      margin-top: 20px;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      position: absolute;
      bottom: 0;
      margin-bottom: 20px;

      img {
        width: 24px;
        height: 24px;

        & + img {
          margin-left: 20px;
        }
      }
    }
  }
`;
