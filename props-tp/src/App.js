import React from "react";
import "./App.css";
import PropsTesting from "./components/PropsTesting";

function App() {
  const photos = [
    {
      photo1:
        "https://media.istockphoto.com/id/1171169099/photo/man-with-crossed-arms-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=_vETAeGc6ooeOx-WZYFyZdUUL5hyDPrvakBpjytN7lM=",
      nom: "Person 1",
      age: "25",
    },
    {
      photo1:
        "https://onlinetherapy.co.nz/wp-content/uploads/2017/05/banner-persone-300x279.png",
      nom: "Person 2",
      age: "30",
    },
    {
      photo1:
        "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
      nom: "Person 3",
      age: "22",
    },
  ];

  return (
    <div className="App">
      {/* Pass the photos array as a prop to PropsTesting */}
      <PropsTesting photos={photos} />
    </div>
  );
}

export default App;
