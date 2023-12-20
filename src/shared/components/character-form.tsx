"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  description: string;
  age: number;
  gender: string;
  birthPlace: string;
  residence: string;
  picture: undefined;
};

export default function CharacterForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      age: 0,
      gender: "",
      birthPlace: "",
      residence: "",
      picture: undefined,
      STR: 0,
      DEX: 0,
      POW: 0,
      CON: 0,
      APP: 0,
      EDU: 0,
      SIZ: 0,
      INT: 0,
    },
  });
  
  function toggleVisibility() {
    let collContent = document.querySelector('.coll-content');
    if (collContent != null)
      { // @ts-ignore
        collContent.style.display = (collContent.style.display === 'none' || collContent.style.display === '') ? 'block' : 'none';
      }
  }

  function half(stat: number) {
    return Math.floor(Number(stat / 2));
  }

  function lowestValue(stat: number) {
    return Math.floor(Number(stat / 5));
  }
  // https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/
  // https://www.youtube.com/watch?v=XlAs-Lid-TA

  // const onSubmit = handleSubmit((data) => console.log(data))

  const [picture, setFile] = React.useState();
  const onSubmit = (data) => {
    console.log(data);
    console.log(data.file);
    // setFile(URL.createObjectURL(data.file[0]));
  };
  // const onSubmit = async (data) => {
  //   const formData = new FormData();
  //   formData.append("file", data.file[0]);

  //   const res = await fetch("http://localhost:5000/upload-file", {
  //       method: "POST",
  //       body: formData,
  //   }).then((res) => res.json());
  //   alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Set your Name:</h2>
      <input {...register("name", { required: true, maxLength: 20 })} />
      <h2>Describe your Character:</h2>
      <input {...register("description", { pattern: /^[A-Za-z]+$/i })} />
      <h2>Add Picture of your Character:</h2>
      {/* <input ref={register} type="file" name="picture"/> */}
      <input type="file" {...register("picture")} />
      <h2>Set age:</h2>
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <h2>Chose gender:</h2>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <h2>Set birthplace:</h2>
      <input {...register("birthPlace", { pattern: /^[A-Za-z]+$/i })} />
      <h2>Set your Residence:</h2>
      <input {...register("residence", { pattern: /^[A-Za-z]+$/i })} />
      <input type="submit" />
      
      <div className="wrapper">
        <div
          className="collapsible"
          onClick={toggleVisibility}>
          <h1>Character Passive</h1>
        </div>

        <div className="coll-content">
          <ul>
            <li>
              <h2 className="title">STR</h2>
              <input
                type="number"
                className="full-value"
                {...register("STR", { min: 0, max: 99 })}
              />
              <div className="half-value">{half(getValues("STR"))}</div>
              <div className="lowest-value">{lowestValue(getValues("STR"))}</div>
            </li>
            <li>
              <h2 className="title">DEX</h2>
              <input
                type="number"
                className="full-value"
                {...register("DEX", { min: 0, max: 99 })}
              />
              <div className="half-value">{half(getValues("DEX"))}</div>
              <div className="lowest-value">{lowestValue(getValues("DEX"))}</div>
            </li>
            <li>
              <h2 className="title">POW</h2>
              <input
                type="number"
                className="full-value"
                {...register("POW", { min: 0, max: 99 })}
              />
              <div className="half-value">{half(getValues("POW"))}</div>
              <div className="lowest-value">{lowestValue(getValues("POW"))}</div>
            </li>
            <li>
              <h2 className="title">CON</h2>
              <input
                type="number"
                className="full-value"
                {...register("CON", { min: 0, max: 99 })}
              />
              <div className="half-value">{half(getValues("CON"))}</div>
              <div className="lowest-value">{lowestValue(getValues("CON"))}</div>
            </li>
            <li>
              <h2 className="title">APP</h2>
              <input
                type="number"
                className="full-value"
                {...register("APP", { min: 0, max: 99 })}
              />
              <div className="half-value">{half(getValues("APP"))}</div>
              <div className="lowest-value">{lowestValue(getValues("APP"))}</div>
            </li>
            <li>
              <h2 className="title">EDU</h2>
              <input
                type="number"
                className="full-value"
                {...register("EDU", { min: 0, max: 99 })}
              />
              <div className="half-value">{half(getValues("EDU"))}</div>
              <div className="lowest-value">{lowestValue(getValues("EDU"))}</div>
            </li>
            <li>
              <h2 className="title">SIZ</h2>
              <input
                type="number"
                className="full-value"
                {...register("SIZ", { min: 0, max: 99 })}
              />
              <div className="half-value">{half(getValues("SIZ"))}</div>
              <div className="lowest-value">{lowestValue(getValues("SIZ"))}</div>
            </li>
            <li>
              <h2 className="title">INT</h2>
              <input
                type="number"
                className="full-value"
                {...register("INT", { min: 0, max: 99 })}
              />
              <div className="half-value">{half(getValues("INT"))}</div>
              <div className="lowest-value">{lowestValue(getValues("INT"))}</div>
            </li>
          </ul>
        </div>
      </div>

    </form>
  );
}
