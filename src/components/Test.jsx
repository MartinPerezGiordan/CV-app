import { useState } from "react";

export default function Test() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <ValueDisplay value={value} />
    </div>
  );
}

function ValueDisplay({ value }) {
  return <h1 className="NASHEEEEE">{value}</h1>;
}
