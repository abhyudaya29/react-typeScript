import React, { useState } from 'react'

interface MyButtonProps{
  text:string|number
  onClick?:()=>void
}
// React.FC Indicates that the function is a component type
interface Book{
  name:string,
  price:number
}
const MyButton :React.FC<MyButtonProps> = (props) => {
  const [value,setvalue]=useState<string|undefined>('')
  const [book,setbook]=useState<Book>({
    name:"One",
    price:100
  })
  const{text,}=props;
  const handleClick=()=>{
    setvalue(value+1)

  }
  const handleChange=((e:React.ChangeEvent<HTMLInputElement>)=>{
    setvalue(e.target.value)

  })
  const handleSubmit=((e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(e)


  })
  return (
    <>
    <div>
      <h2>{value}</h2>
      <button onClick={handleClick}>{text}</button>
      <h2>Name:{book.name},Price:{book.price}</h2>
      <button onClick={()=>(setbook({name:"throw",price:20}))}>daba</button>
      <form action=""
      onSubmit={handleSubmit}
      
      >
      <input type="text"
      onChange={handleChange}
      placeholder='text'
       />
      <button type='submit'>submit</button>
      </form>
    </div>
    </>
  )
}

export default MyButton