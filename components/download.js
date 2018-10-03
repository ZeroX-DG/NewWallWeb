import styled from "styled-components";

const Download = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  font-family: "Lato";
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
  &:last-child {
    margin-right: 0;
  }
`;

const SourceCode = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  font-family: "lato";
  font-size: 18px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  text-decoration: none;
  color: black;
  &:hover {
    background: black;
    color: white;
  }
`;

const AuthorLine = styled.p`
  text-align: center;
  margin-top: 30px;
  a {
    color: black;
    font-weight: bold;
  }
`;

const version = "1.0.0";
const downloadURL = `https://github.com/ZeroX-DG/NewWall/releases/download/v${version}`;
const links = {
  window: `${downloadURL}/NewWall.Setup.${version}.exe`,
  linuxDeb: `${downloadURL}/newwall_${version}_amd64.deb`,
  linuxAppImage: `${downloadURL}/newwall-${version}-x86_64.AppImage`
};

export default () => (
  <Download id="download">
    <h1 style={{ marginBottom: "50px" }}>Download</h1>
    <DownloadButton href={links.window}>Windows</DownloadButton>
    <DownloadButton href={links.linuxAppImage}>
      Linux (.AppImage)
    </DownloadButton>
    <DownloadButton href={links.linuxDeb}>Linux (.deb)</DownloadButton>
    <div style={{ marginTop: "50px" }}>
      <SourceCode href="https://github.com/ZeroX-DG/NewWall">
        Source code
      </SourceCode>
    </div>
    <AuthorLine>
      Made with &#x2764; by{" "}
      <a href="https://github.com/ZeroX-DG">Hung Nguyen</a>
    </AuthorLine>
  </Download>
);
