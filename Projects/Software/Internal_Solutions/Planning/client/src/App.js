import "./App.css";
import MainContent from "../../client/src/views/MainContent";
import Navigation from "../../client/src/views/Navigation";
import Footer from "../../client/src/views/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
