import styled from "styled-components";
import screenShot from "../images/screenshot.png";
import setting from "../images/setting.png";

const Feature = styled.div`
  width: 100%;
  padding: 50px 0;
  font-family: "Lato";
  text-align: center;
`;

const FeatureList = styled.div`
  width: 90%;
  margin-left: 5%;
`;

const FeatureBox = styled.div`
  width: 40%;
  margin: 0 50px;
  display: inline-block;
  .featureTitle {
    font-size: 30px;
  }
  .featureDetails {
    font-size: 20px;
  }
  a {
    font-weight: bold;
    color: black;
  }
  img {
    width: 80%;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  }
`;

export default () => (
  <Feature>
    <h1 style={{ marginBottom: "100px" }}>Features</h1>
    <FeatureList>
      <FeatureBox>
        <img src={screenShot} alt="Screen shot" />
        <p className="featureTitle">High-quality wallpapers</p>
        <p className="featureDetails">
          All the amazing wallpapers is taken directly from{" "}
          <a href="https://unsplash.com/">Unsplash</a>
        </p>
      </FeatureBox>
      <FeatureBox>
        <img src={setting} alt="setting shot" />
        <p className="featureTitle">Advanced configuration</p>
        <p className="featureDetails">
          Change your setting manually if the default doesn't work for you.
        </p>
      </FeatureBox>
    </FeatureList>
  </Feature>
);
