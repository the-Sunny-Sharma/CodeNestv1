import React from "react";

export default function SmallInput(props) {
  return (
    <>
      <input id={props.ID} type={props.Type} className={props.ClassName} />
    </>
  );
}
