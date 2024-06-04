import Image from "next/image";
import food from "@/data/food";
import FoodCard from "./components/FoodCard";
import { Food } from "@/types";

export default function Home() {
  return (
    <main className="p-3">
      <div className="px-2 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
        {food?.map((item: Food) => (
          <FoodCard key={item.name} food={item} />
        ))}
      </div>
    </main>
  );
}
