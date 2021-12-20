import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import Lessons from "./views/Lessons/Lessons";
import DataTypes from "./views/Lessons/Data_Types/Data_Types";
import BooleanType from "./views/Lessons/Data_Types/BooleanType";
import CharacterType from "./views/Lessons/Data_Types/CharacterType";
import FloatType from "./views/Lessons/Data_Types/FloatType";
import IntegerType from "./views/Lessons/Data_Types/IntegerType";
import StringType from "./views/Lessons/Data_Types/StringType";
import ReviewDataTypes from "./views/Lessons/Data_Types/Review_Data_Types";

function App() {
  return (
    <div className="App">
      <h1>Javascript</h1>
      <header className="App-header">
        <Router>
          <Lessons
          path="/Lessons" />
          <DataTypes path="/Lessons/Data_Types"/>
          <BooleanType path="/Lessons/Data_Types/BooleanType"/>
          <CharacterType path ="/Lessons/Data_Types/CharacterType"/>
          <FloatType path ="/Lessons/Data_Types/FloatType"/>
          <IntegerType path ="/Lessons/Data_Types/IntegerType"/>
          <StringType path ="/Lessons/Data_Types/StringType"/>
          <ReviewDataTypes path="/Lessons/Data_Types/Review_Data_Types"/>
        </Router>
      </header>
    </div>
  );
}

export default App;
