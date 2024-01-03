import Buttons from "../../Components/Buttons/Buttons";
import Contacts from "../../Components/ContactForm/Contacts";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Tours from "../../Components/Tours/Tours";
import ToursPageFilters from "../../Components/ToursPageFilters/ToursPageFilters";
import ToursPageMain from "../../Components/ToursPageMain/ToursPageMain";
import { tours } from "../../Data";
type TourProps = {};

const TourPage = (props: TourProps) => {
  return (
    <div>
      <Header />
      <Buttons />
      <ToursPageMain />
      <ToursPageFilters />
      <Tours tours={tours} />
      <Contacts />
      <Footer />
    </div>
  );
};
export default TourPage;
