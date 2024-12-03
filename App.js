import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Footer from "./src/Footer";
import Body from "./src/Body";
const App = () => {
  return (
    <div className="App Layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
