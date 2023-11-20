import { data } from "autoprefixer";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form"

type FormData = {
  firstName: string
  description: string
  age: undefined
  gender: string
  birthPlace: string
  residence: string
  picture: undefined
}

export default function App () {
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

  const onSubmit = handleSubmit((data) => console.log(data))

  // const [picture, setFile] = React.useState();
  // const onSubmit = data => {
  //   console.log(data);
  //   console.log(data.target.files);
  //     setFile(URL.createObjectURL(data.target.files[0]));
  // }
  return (
    <form onSubmit={onSubmit}>
      <h2>Set your Name:</h2>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <h2>Describe your Character:</h2>
      <input {...register("description", { pattern: /^[A-Za-z]+$/i })} />
      <h2>Add Picture of your Character:</h2>
      <input ref={register} type="file" name="picture"/>
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