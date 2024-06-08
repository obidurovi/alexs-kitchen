"use client";

import FoodCard from "../components/FoodCard";
import { Food } from "@/types";
import AddList from "@/components/Modal/AddList";
import { useEffect, useState } from "react";
import axios from "axios";
import FoodSkeletons from "@/components/skeleton/FoodSkeleton";

export default function Home() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the foods data from the server
    const fetchFoods = async () => {
      const response = await axios.get("http://localhost:5050/foods");
      setFoods(response.data);
      setLoading(false);
    };

    fetchFoods();
  }, []);

  // handle delete data
  const handleDataDelete = async (id: number) => {
    console.log(id);

    try {
      const response = await axios.delete(`http://localhost:5050/foods/${id}`);
      if (response.status === 200) {
        setFoods((foods) => foods.filter((food) => food.id !== id));
        console.log(`Food with id ${id} deleted successfully.`);
      } else {
        console.error(`Failed to delete food with id ${id}`);
      }
    } catch (error) {
      console.error(
        `An error occurred while deleting the food with id ${id}:`,
        error
      );
    }
  };

  return (
    <main className="py-6 px-4 flex flex-col gap-5">
      <div className="flex justify-start items-center ">
        <AddList />
      </div>
      {loading && <FoodSkeletons />}
      <div className="px-2 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-items-center gap-3">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} onDelete={handleDataDelete} />
        ))}
      </div>
    </main>
  );
}
