import { data } from "autoprefixer";
import React from "react";
import { useForm, handleSubmit, SubmitHandler, Controller } from "react-hook-form"

type FormData = {
  firstName: string
  description: string
  age: undefined
  gender: string
  birthPlace: string
  residence: string
  picture: undefined
}

export default function CharacterForm () {
  const { register, setValue, handleSubmit, formState: { errors },} = useForm({
    defaultValues: {
        firstName: '',
        description: '',
        age:undefined,
        gender: '',
        birthPlace: '',
        residence: '',
        picture: undefined,
    },
  })
// https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/
// https://www.youtube.com/watch?v=XlAs-Lid-TA

  // const onSubmit = handleSubmit((data) => console.log(data))

  const [picture, setFile] = React.useState();
  const onSubmit = data => {
    console.log(data);
    console.log(data.file);
      // setFile(URL.createObjectURL(data.file[0]));
  }
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
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <h2>Describe your Character:</h2>
      <input {...register("description", { pattern: /^[A-Za-z]+$/i })} />
      <h2>Add Picture of your Character:</h2>
      {/* <input ref={register} type="file" name="picture"/> */}
      <input type="file" {...register("picture")}/>
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
    </form>
  )
}