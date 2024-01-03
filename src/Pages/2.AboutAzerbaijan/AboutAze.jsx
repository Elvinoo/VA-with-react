import Header from "../../Components/Header/Header";
import Contacts from "../../Components/ContactForm/Contacts";
import Footer from "../../Components/Footer/Footer";

import AboutAzeContent from "../../Components/AboutAzeContent/AboutAzeContent";
import AboutAzePhotos from "../../Components/AboutAzePhotos/AboutAzePhotos";
import Logos from "../../Components/Logos/Logos";

import Buttons from "../../Components/Buttons/Buttons";
const AboutAze = () => {
  return (
    <div>
      <Header />
      <Buttons />
      <AboutAzePhotos />
      <AboutAzeContent />
      <Logos />
      <Contacts />
      <Footer />
    </div>
  );
};

export default AboutAze;
