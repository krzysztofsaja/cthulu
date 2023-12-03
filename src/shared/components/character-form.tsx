import { data } from "autoprefixer";
import React from "react";
import { useForm, handleSubmit, SubmitHandler, Controller } from "react-hook-form"

type FormData = {
  Name: string
  Occupation: string
  Age: undefined
  Sex: string
  BirthPlace: string
  Residence: string
}

export default function CharacterForm () {
  const { register, setValue, handleSubmit, formState: { errors },} = useForm({
    defaultValues: {
        Name: '',
        Occupation: '',
        Age:undefined,
        Sex: '',
        BirthPlace: '',
        Residence: '',
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
      <div className="flex flex-row flex-wrap">
          <div className="bg-textbg basis-full">
            <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Name:</label><input className="border-none outline-none" {...register("Name", { required: true, maxLength: 20 })} />
          </div>
        <div className="bg-textbg basis-full">
          <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Occupation:</label><input className="border-none outline-none" {...register("Occupation", { required: true, maxLength: 30 })} />
        </div>
        <div className="basis-1/2 bg-textbg">
          <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Age:</label><input className="border-none outline-none" type="number" {...register("Age", { min: 18, max: 99 })} />
        </div>
        <div className="basis-1/5 bg-textbg">
          <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Sex:</label><select className="border-none outline-none" {...register("Sex")}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
        </div>
        <div className="bg-textbg basis-full">
          <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Birthplace:</label><input className="border-none outline-none" {...register("BirthPlace", { pattern: /^[A-Za-z]+$/i })} />
        </div>
        <div className="bg-textbg basis-full">
          <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Residence:</label><input className="border-none outline-none" {...register("Residence", { pattern: /^[A-Za-z]+$/i })} />
        </div>
        <input type="submit" />
      </div>
      </form>
  )
}