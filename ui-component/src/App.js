import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
}

export default App;
