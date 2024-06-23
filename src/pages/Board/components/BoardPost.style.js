import styled, { css } from "styled-components";

const BoardBoxPost = styled.li`
  width: 100%;
  height: 9.8%;
  display: flex;
  align-items: center;
  border-top: ${(props) => (props.isTop ? "3px solid black" : 0)};
  border-bottom: ${(props) => props.borderPx} solid black;
  ${(props) =>
    !props.isTop &&
    css`
      &:hover {
        background-color: rgb(240, 240, 240);
        cursor: pointer;
      }
    `}
`;
const BoardBoxPostItem = styled.div`
  display: flex;
  width: ${(props) => props.width};
  margin-right: ${(props) => props.marginRight};
  font-weight: 600;
  font-size: 18px;

  span {
    margin-left: 10px;
    position: relative;
    top: 1px;
  }
`;

export { BoardBoxPost, BoardBoxPostItem };
