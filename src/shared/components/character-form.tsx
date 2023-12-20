"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  Name: string
  Occupation: string
  Age: undefined
  Sex: string
  BirthPlace: string
  Residence: string
};

export default function CharacterForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: '',
      Occupation: '',
      Age:undefined,
      Sex: '',
      BirthPlace: '',
      Residence: '',
    },
  });
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
    <div className="flex flex-col flex-wrap flex justify-center gap-3">
        <div className="bg-textBg basis-full p-2 rounded">
          <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Name: </label><input className="bg-textBg" {...register("Name", { required: true, maxLength: 20 })} />
        </div>
      <div className="bg-textBg basis-full p-2 rounded">
        <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Occupation: </label><input className="bg-textBg" {...register("Occupation", { required: true, maxLength: 30 })} />
      </div>
      <div className="flex flex-row justify-center gap-4">
          <div className=" bg-textBg w-1/2 p-2 rounded h-10">
            <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Age: </label><input className="bg-textBg w-1/2" type="number" {...register("Age", { min: 18, max: 99 })} />
          </div>
          <div className="bg-textBg w-1/2 p-2 rounded h-10">
            <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Sex: </label><select className="bg-textBg appearance-none" {...register("Sex")}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
          </div>
        </div>
      <div className="bg-textBg basis-full p-2 rounded">
        <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Birthplace: </label><input className="bg-textBg" {...register("BirthPlace", { pattern: /^[A-Za-z]+$/i })} />
      </div>
      <div className="bg-textBg basis-full p-2 rounded">
        <label className="[font-family:'Lexend-Regular',Helvetica] font-normal text-black">Residence:</label><input className="bg-textBg" {...register("Residence", { pattern: /^[A-Za-z]+$/i })} />
      </div>
    </div>
    </form>
  );
}
