import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CVPreview from "./components/CVPreview";
import PersonalInfoForm from "./components/forms/PersonalInfoForm";
import EducationForm from "./components/forms/EducationForm";
import ExperienceForm from "./components/forms/ExperienceForm";

function App() {
  const [data, setData] = useState({
    name: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    degree: "Bachelor's in Computer Science",
    university: "University of XYZ",
    location: "City, State",
    startDate: "2020-09-01",
    endDate: "2024-05-30",
    jobTitle: "Software Engineer",
    company: "TechCorp",
    jobLocation: "TechCity",
    jobStartDate: "2022-01-15",
    jobEndDate: "2023-06-30",
    jobDescription: "Developed web applications using React",
  });
  const [backgroundColor, setBackgroundColor] = useState("#f5f5f5");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setBackgroundColor(newColor);
  };

  return (
    <div className="App">
      <Header />
      <div className="sidebar">
        <PersonalInfoForm
          handleInputChange={handleInputChange}
          handleColorChange={handleColorChange}
        />
        <EducationForm handleInputChange={handleInputChange} />
        <ExperienceForm handleInputChange={handleInputChange} />
      </div>
      <CVPreview data={data} backgroundColor={backgroundColor} />
      <Footer />
    </div>
  );
}

export default App;
