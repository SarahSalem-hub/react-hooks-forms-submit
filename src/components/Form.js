import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);


  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors("")
    if(firstName.length > 0){
      const formData = {
        firstName: firstName,
        lastName: lastName,
      };
      setSubmittedData([...submittedData,formData]);
      setFirstName("");
      setLastName("");
    }else{
      setErrors(["First name is required!"])
    }
  }
  console.log(submittedData);
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      {
        errors.length > 0 ?
          errors.map((error,index)=>{
            return <p key={index}>{error}</p>
          }):null
      }
      <h3>Submissions</h3>
      
      {listOfSubmissions}
    </form>
  );
}

export default Form;
