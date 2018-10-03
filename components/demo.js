import styled from "styled-components";

const Demo = styled.div`
  width: 100%;
  padding: 50px 0;
  text-align: center;
  background: #f5f5f5;
`;

export default () => (
  <Demo>
    <iframe
      src="https://player.vimeo.com/video/292591277?title=0&byline=0&portrait=0"
      width="1250"
      height="566"
      frameBorder="0"
      allowFullScreen
    />
  </Demo>
);
