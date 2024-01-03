import { aboutAze } from "../../Data";
import "./AboutAzeContent.css";
const AboutAzeContent = () => {
  return (
    <div className="aboutAze container">
      <h3 className="generalInfo">
        Azerbaijan, officially the Republic of Azerbaijan, is the state located
        in the Caucasus region. Rich in oil, the country is located in Asia
        Transcaucasia, south of the mountainous watershed that separates it
        conventionally from Europe.
      </h3>
      <div className="content">
        <div className="left-column">
          {aboutAze.map((text) => {
            return <a href={"#" + text.key}>{text.key}</a>;
          })}
        </div>
        <div className="right-column">
          {aboutAze.map((text) => {
            return (
              <>
                <h3 id={text.key}>{text.key}</h3>
                <p>{text.value}</p>
              </>
            );
          })}
        </div>
        <img src="./images/aboutAzeCenter.svg" alt="" />
      </div>
    </div>
  );
};

export default AboutAzeContent;
