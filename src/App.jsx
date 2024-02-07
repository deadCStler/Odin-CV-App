import { useState } from "react";
import InputGen from "./components/inputGen";
import InputEdu from "./components/inputEdu";
import InputExp from "./components/inputExp";
import OutputDisplay from "./components/outputDisplay";

function App() {
  const initialData = {
    name: "",
    email: "",
    phoneNo: "",
    schoolName: "",
    level: "",
    year: "",
    companyName: "",
    designation: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
    readOnly: false,
  };
  const [formData, setFormData] = useState(initialData);

  function handleGenUpdate(key, value) {
    if (key === "name") {
      setFormData({ ...formData, name: value });
    } else if (key === "email") {
      setFormData({ ...formData, email: value });
    } else if (key === "phoneNo") {
      setFormData({ ...formData, phoneNo: value });
    } else {
      console.log("Error" + value);
    }
  }

  function handleEduUpdate(key, value) {
    if (key === "schoolName") {
      setFormData({ ...formData, schoolName: value });
    } else if (key === "level") {
      setFormData({ ...formData, level: value });
    } else if (key === "year") {
      setFormData({ ...formData, year: value });
    } else {
      console.log("Error" + value);
    }
  }

  function handleExpUpdate(key, value) {
    if (key === "companyName") {
      setFormData({ ...formData, companyName: value });
    } else if (key === "designation") {
      setFormData({ ...formData, designation: value });
    } else if (key === "responsibilities") {
      setFormData({ ...formData, responsibilities: value });
    } else if (key === "dateFrom") {
      setFormData({ ...formData, dateFrom: value });
    } else if (key === "dateUntil") {
      setFormData({ ...formData, dateUntil: value });
    } else {
      console.log("Error" + value);
    }
  }

  function submit() {
    setFormData({ ...formData, readOnly: true });
  }

  function edit() {
    setFormData({ ...formData, readOnly: false });
  }

  function reset() {
    setFormData(initialData);
  }

  return (
    <>
      <div className="input">
        <h1>Enter your Details Below</h1>
        <form id="form">
          <h2 className="headings">General Details</h2>
          <InputGen genData={formData} handleGenUpdate={handleGenUpdate} />
          <h2 className="headings">Experience Details</h2>
          <InputExp expData={formData} handleExpUpdate={handleExpUpdate} />
          <h2 className="headings">Educational Details</h2>
          <InputEdu eduData={formData} handleEduUpdate={handleEduUpdate} />
        </form>
        <div className="buttons">
          <button onClick={submit}>Submit</button>
          <button onClick={edit}>Edit</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
      <div className="output">
        <OutputDisplay formData={formData} />
      </div>
    </>
  );
}

export default App;
