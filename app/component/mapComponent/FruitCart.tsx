"use client"
import BackButton from "../singleComponent/BackButton";
import {useState} from "react"
interface FruitCardProps {
  data: any; 
}

const FruitCard: React.FC<FruitCardProps> = ({data}) => {
  const [family,setFamily] = useState([])
  const datas = Array.from(new Set(data.map((fruit:any) => fruit.family)));
   const handle=(x:string)=>{
    console.log(x);
    
        const fruits = data.filter((value:any)=>{
             return value.family== x
        }) 
        console.log(fruits,'iiiiiiiiiiiiiiiiiiiiiiiiiiii');
        
        setFamily(fruits)         
   }
const handleChange = ()=>{
  setFamily([])
  console.log(family);
  
}
  return (
    <>
      {!family.length  ?
     <div className="w-2/3 h-[600px] overflow-y-scroll grid grid-cols-3 pl-10  ">
      {datas.map((value:any,index:number)=>(
           <div className="w-[300px] h-[300px] flex  items-center bg-slate-100 my-2 shadow rounded-lg hover:shadow-2xl hover:bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 hover:transition duration-700 ease-in-out" key={index} >
             <div className="w-full h-1/2 flex justify-center items-center flex-col">
                <h1 className="w-full text-center font-mono  text-xl"> Fruit family</h1>
                <h1 className="w-full text-center font-mono font-semibold text-2xl"> {value}</h1>
                <button className="w-2/3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{handle(value)}}>Check fruits</button>
                
             </div>  
        </div>
      ))}
      
    </div>
    : 
    <>
    <div className="w-[40%] h-[640px] mt-[-30px] flex items-center justify-center"style={{backgroundImage:'url(https://i.pinimg.com/564x/22/63/2c/22632cdadd2e67c96b2367c16969aa49.jpg)'}}>
      <div>
      <button className="w-2/3 h-10 text-white bg-gradient-to-br from-purple-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{handleChange()}}>Back to family</button>
         <BackButton/> 
      </div>

    
    </div>
      
       <div className="w-2/3 h-[600px] overflow-y-scroll p-7">

        

        {family?.map((value:any,index:number)=>(
           <div key={index} className="w-full h-[300px]  my-3 flex rounded-2xl shadow-lg">
                <div className="w-1/3 h-full bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center flex-col ">
                    <h1 className="font-mono font-medium text-slate-700">Family</h1>
                    <h1 className="font-mono font-bold text-xl">{value.family}</h1>
                    <h1 className="font-mono font-medium text-slate-700">Name of the fruit</h1>
                    <h1 className="font-mono font-bold text-2xl">{value.name}</h1>
                </div>
                <div className="w-2/3 h-full bg-gradient-to-r from-cyan-100 to-blue-100 flex">
                    <div className="w-2/3 h-full  px-10">
                         <div className="w-full flex">
                            <h1 className="font-mono font-medium mt-1 text-slate-700">Name:</h1>
                            <h1 className="font-mono font-bold text-xl">{value.name}</h1>
                         </div>
                         <div className="w-full  flex">
                            <h1 className="font-mono font-medium mt-1 text-slate-700">Family:</h1>
                            <h1 className="font-mono font-bold text-xl">{value.family}</h1>
                         </div>
                         <div className="w-full  flex">
                            <h1 className="font-mono font-medium mt-1 text-slate-700">genus:</h1>
                            <h1 className="font-mono font-bold text-xl">{value.genus}</h1>
                         </div>
                         <div className="w-full flex">
                            <h1 className="font-mono font-medium mt-1 text-slate-700">calories:</h1>
                            <h1 className="font-mono font-bold text-xl">{value.nutritions.calories}</h1>
                         </div>
                         <div className="w-full  flex">
                            <h1 className="font-mono font-medium mt-1 text-slate-700">carbohydrates:</h1>
                            <h1 className="font-mono font-bold text-xl">{value.nutritions.carbohydrates}</h1>
                         </div>
                         <div className="w-full  flex">
                            <h1 className="font-mono font-medium mt-1 text-slate-700">fat:</h1>
                            <h1 className="font-mono font-bold text-xl">{value.nutritions.fat}</h1>
                         </div>
                         <div className="w-full  flex">
                            <h1 className="font-mono font-medium mt-1 text-slate-700">protein:</h1>
                            <h1 className="font-mono font-bold text-xl">{value.nutritions.protein}</h1>
                         </div>
                         <div className="w-full flex">
                            <h1 className="font-mono font-medium mt-1 text-slate-700">sugar:</h1>
                            <h1 className="font-mono font-bold text-xl">{value.nutritions.sugar}</h1>
                         </div>
                         <div className="w-full  flex">
                            <h1 className="font-mono font-medium mt-1 text-slate-700">order:</h1>
                            <h1 className="font-mono font-bold text-xl">{value.order}</h1>
                         </div>
                    </div>
                   
                </div>
           </div>
        ))}
    </div>
    </>} 
   
    </>

  );
};

export default FruitCard;