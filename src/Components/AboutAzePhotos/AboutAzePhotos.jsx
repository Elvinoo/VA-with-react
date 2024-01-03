import { aboutAzePhotos } from "../../Data";
import "./AboutAzePhotos.css";
const AboutAzePhotos = () => {
  return (
    <div className="aboutAze-photos">
      {aboutAzePhotos.map((photo) => {
        return <img src={"./images/" + photo.link} alt="Azerbaijan" />;
      })}
    </div>
  );
};

export default AboutAzePhotos;
