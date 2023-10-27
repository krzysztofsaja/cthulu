import { useForm } from "react-hook-form"

export default function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
        firstName: '',
        description: '',
        age:0,
        gender: '',
        birthPlace: '',
        residence: '',
    }
  })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("description", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input {...register("birthPlace", { pattern: /^[A-Za-z]+$/i })} />
      <input {...register("residence", { pattern: /^[A-Za-z]+$/i })} />
      <input type="submit" />
    </form>
  )
}