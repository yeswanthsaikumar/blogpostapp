import React, { useState } from "react";

export const TodoLogicTest = () => {
  const [testArray, setTestArray] = useState([
    { id: 1, category: "todo", contents: "do something 1 " },
    { id: 2, category: "todo", contents: "do something 2 " },
    { id: 3, category: "todo", contents: "do something 3 " },
  ]);

  console.log(testArray);

  const onCategoryChange = (newCategory, index) => {
    let newArray = [...testArray];
    newArray[index].category = newCategory;
    setTestArray(newArray);
  };

  return (
    <>
      {testArray.map((data, index) => (
        <div key={index + 223}>
          <div>id : {data.id}</div>
          <div>content: {data.contents}</div>
          <div>category: {data.category}</div>
          <button
            onClick={() => {
              onCategoryChange("done", index);
            }}
          >
            done
          </button>

          <button
            onClick={() => {
              onCategoryChange("todo", index);
            }}
          >
            todo
          </button>
        </div>
      ))}
    </>
  );
};
