"use client";

import FoodCard from "../components/FoodCard";
import { Food } from "@/types";
import AddList from "@/components/Modal/AddList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/foods").then((res) => {
      setFoods(res.data);
    });
  }, [foods]);
  return (
    <main className="py-6 px-4 flex flex-col gap-5">
      <div className="flex justify-start items-center ">
        <AddList />
      </div>
      <div className="px-2 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
        {foods?.map((item: Food) => (
          <FoodCard key={item.name} food={item} />
        ))}
      </div>
    </main>
  );
}
