import React from "react";

export default function SmallInput(props) {
  const handleChange = (event) => {
    props.OnChange(event); // Pass the event object directly
  };

  return (
    <>
      <input
        id={props.ID}
        type={props.Type}
        className={props.ClassName}
        value={props.Value}
        onChange={handleChange}
        required
      />
    </>
  );
}
