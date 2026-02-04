import { ToastContainer } from "react-toastify";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Feedback from "./page/Feedback";

const App = () => {
  return (
    <>
      <Header />
      <Feedback />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
