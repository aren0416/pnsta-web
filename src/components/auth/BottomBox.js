import styled from "styled-components";
import { Link } from "react-router-dom";

const Bottom = styled.div`
  padding: 20px 0;
  width: 100%;
  text-align: center;
`;

export const BottomBox = ({ cta, link, linkText }) => {
  return (
    <Bottom>
      <span>{cta} </span>
      <Link to={link}>{linkText}</Link>
    </Bottom>
  );
};
