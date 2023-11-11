"use client"
import {useRouter } from 'next/navigation'

export default function Home() {
const {push} = useRouter()


const handleNavigation = ()=>{
    push('/Information')
}
  return (
  <div className="flex justify-center items-center h-[600px] font-serif">
      <div className="w-2/3 h-[300px] bg-slate-200 rounded-md shadow-2xl">
        <div className="w-full h-1/3 flex items-center justify-center  text-emerald-600">
           <h1 className="text-center   font-extrabold text-7xl">Fruit Info</h1>   
        </div>
        <div className="w-full h-1/3 text-emerald-500">
           <h1 className="text-center  font-extrabold text-4xl ">Every thing About Natural Fruits</h1>   
        </div>
        <div className="w-full h-1/3 flex justify-center ">
               <button onClick={handleNavigation} type="button" className="w-1/2 h-14 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Green to Blue</button>  
        </div>
      </div>
  </div>
  )
}
