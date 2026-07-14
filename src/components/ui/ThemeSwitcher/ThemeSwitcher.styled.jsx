import styled from 'styled-components';

export const ThemeSwitcherWrapper = styled.div`
  position: relative;
  background-color: white;
  height: 25px;
  width: 70px;
  border-radius: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  button {
    position: absolute;
    text-align: center;
    border-radius: 50%;
    background-color: blue;
    /* width:; */
  }

  svg {
    width: 20px;
    height: 20px;

    text-align: center;

    color: white;
  }

  input {
    position: absolute;
    opacity: 0;

    &::after {
      position: absolute;

      content: 'O';
      top: 0;
      right: 0;

      width: 100%;
      height: 100%;
      background-color: blue;
      border-radius: var(--radius-round);
    }
  }
`;
