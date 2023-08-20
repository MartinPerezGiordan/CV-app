import "../../styles/Forms.css";

function PersonalInfoForm({ handleInputChange, handleColorChange }) {
  return (
    <div className="form">
      <fieldset>
        <legend>General Info</legend>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={handleInputChange}
        />
        <div className="colorOptions">
          <label htmlFor="colorPicker">Choose a color: </label>
          <input
            type="color"
            name="color"
            id="colorPicker"
            onChange={handleColorChange}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="tel"
          placeholder="Phone number"
          name="phone"
          onChange={handleInputChange}
        />
      </fieldset>
    </div>
  );
}

export default PersonalInfoForm;
