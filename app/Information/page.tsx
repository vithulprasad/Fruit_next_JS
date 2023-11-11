
import FruitCard from "../component/mapComponent/FruitCart";

const fruits = async () => {
  console.log("working of the fruit fetching ");
  const response = await fetch('https://www.fruityvice.com/api/fruit/all');
  const data = await response.json();
  return data;
};

const Page: React.FC = async () => {
  const data = await fruits();



  return (
    <div className='flex justify-center items-center h-[700px]'>
            <FruitCard data={data} />
    </div>
  );
};

export default Page;



