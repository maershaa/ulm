import styled from 'styled-components';

// Классический паттерн адаптивной карты:
// paddingBottom: 56.25% задаёт соотношение сторон 16:9
// относительно ширины родителя (100%), сохраняя пропорции на любом экране.
export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  margin-top: 20px;

  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
`;

export const MapFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;
