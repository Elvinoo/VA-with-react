import Buttons from "../../Components/Buttons/Buttons";
import Contacts from "../../Components/ContactForm/Contacts";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SingleTour from "../../Components/SingleTour/SingleTour";

function Tour() {
  return (
    <div>
      <Header />
      <Buttons />
      <SingleTour />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Tour;
