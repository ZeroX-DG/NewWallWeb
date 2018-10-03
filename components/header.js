import styled from "styled-components";
import icon from "../images/icon512.png";

const Header = styled.div`
  width: 100%;
  height: 500px;
  font-family: "Lato";
  text-align: center;
  box-sizing: border-box;
  padding-top: 100px;
  img {
    width: 200px;
    border-radius: 50%;
    box-shadow: 0 5px 10px rgb(104, 51, 255, 0.25);
  }
  h1 {
    font-weight: lighter;
    font-size: 50px;
  }
`;

const DownloadButton = styled.a`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #3498db;
  color: white;
  font-family: "lato";
  font-size: 18px;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
  display: inline-block;
`;

export default () => (
  <Header>
    <img src={icon} alt="" />
    <h1>NewWall</h1>
    <DownloadButton href="#download">Download</DownloadButton>
  </Header>
);
