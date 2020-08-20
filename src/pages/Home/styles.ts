import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 40px;
      line-height: 48px;
      font-weight: 600;
      color: #212121;
    }

    button {
      width: 176px;
      height: 40px;
      background: #212121;
      border: 0;
      color: #ffffff;
      font-weight: 600;
      line-height: 24px;
    }
  }
`;

export const Navers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Naver = styled.div`
  width: 280px;
  height: 376px;
  display: flex;
  flex-direction: column;

  img {
    width: 280px;
    height: 280px;
  }

  strong {
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
    color: #212121;
    margin-top: 10px;
  }

  span {
    font-size: 16px;
    line-height: 24px;
    color: #212121;
    margin-top: 6px;
  }

  div {
    display: flex;
    margin-top: 10px;

    img {
      width: 24px;
      height: 24px;

      & + img {
        margin-left: 10px;
      }
    }
  }
`;
