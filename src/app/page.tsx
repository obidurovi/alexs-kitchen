import Image from "next/image";
import food from "@/data/food";
import FoodCard from "../components/FoodCard";
import { Food } from "@/types";
import AddList from "@/components/Modal/AddList";

export default function Home() {
  return (
    <main className="py-6 px-4 flex flex-col gap-5">
      <div className="flex justify-start items-center ">
        <AddList />
      </div>
      <div className="px-2 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
        {food?.map((item: Food) => (
          <FoodCard key={item.name} food={item} />
        ))}
      </div>
    </main>
  );
}
