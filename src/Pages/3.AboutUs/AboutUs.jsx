import Header from "../../Components/Header/Header";
import Contacts from "../../Components/ContactForm/Contacts";
import Footer from "../../Components/Footer/Footer";
import Logos from "../../Components/Logos/Logos";
import AboutUsText from "../../Components/AboutUsText/AboutUsText";

import Buttons from "../../Components/Buttons/Buttons";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Buttons />
      <AboutUsText />
      <Logos />
      <Contacts />
      <Footer />
    </div>
  );
};

export default AboutUs;
