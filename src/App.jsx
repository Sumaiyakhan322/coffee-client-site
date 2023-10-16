import { useLoaderData } from "react-router-dom"
import CoffeeDetails from "./Components/CoffeeDetails";
import { useState } from "react";




function App() {
  const loadedcoffees=useLoaderData();
  const [coffees,setSelectedCoffee]=useState(loadedcoffees)
  return (
    <div  className="p-10 ">
      
      <h1 className='text-6xl text-purple-600 text-center mb-20'>Coffeee {coffees.length}</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10"> {coffees.map(coffee=><CoffeeDetails coffee={coffee} key={coffee._id} coffees={coffees} setSelectedCoffee={setSelectedCoffee}></CoffeeDetails>)}</div>
     
      
    </div>
  )
}

export default App
