import Contacts from "../../Components/ContactForm/Contacts";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import Logos from "../../Components/Logos/Logos";
import Tours from "../../Components/Tours/Tours";
import { tours } from "../../Data";

import Buttons from "../../Components/Buttons/Buttons";
const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Buttons />

      <Tours tours={tours} />
      <Logos />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
