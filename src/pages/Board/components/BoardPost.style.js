import styled from "styled-components";

const BoardBoxPost = styled.li`
  width: 100%;
  height: 9.8%;
  display: flex;
  align-items: center;
  border-bottom: ${(props) => props.borderPx} solid black;
`;
const BoardBoxPostItem = styled.p`
  width: ${(props) => props.width};
  margin-right: ${(props) => props.marginRight};
  font-weight: 600;
  font-size: 18px;
`;

export { BoardBoxPost, BoardBoxPostItem };
