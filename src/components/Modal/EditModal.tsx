"use client";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, IconButton } from "@mui/material";
import { Food } from "@/types";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 300, // width on extra-small screens
    sm: 400, // width on small screens and up
    md: 500, // width on medium screens and up
    lg: 600, // width on large screens and up
    xl: 700, // width on extra-large screens and up
  },
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ food }: { food: Food }) {
  const [open, setOpen] = React.useState(false);
  const [editedFood, setEditedFood] = React.useState<Food>(food);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // handle edit data
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setEditedFood((prevFood) => ({
      ...prevFood,
      [id]: value,
    }));
  };

  // handle submit form
  const handleEditForm = (e: any) => {
    e.preventDefault();
    if (editedFood.name || editedFood.description || editedFood.thumbnail) {
      axios
        .put(`http://localhost:5050/foods/${food.id}`, editedFood)
        .then((res) => {
          setEditedFood(res.data);
          handleClose();
        })
        .catch((error) => {
          console.error("Error updating food:", error);
        });
    }
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <FaRegEdit />
      </IconButton>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <Box sx={style}>
          <div className="flex flex-col justify-center ">
            <form onSubmit={handleEditForm}>
              <h1 id="spring-modal-title" className="text-3xl p-4 text-center ">
                Edit Your Food Data
              </h1>
              <div className="mb-5">
                <label
                  id="name"
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Food Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={editedFood.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Short Description
                </label>
                <input
                  type="text"
                  id="description"
                  value={editedFood.description}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Food Image Url
                </label>
                <input
                  type="text"
                  id="thumbnail"
                  value={editedFood.thumbnail}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <Button
                type="submit"
                id="base-input"
                className="add-button-form  text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              >
                Save Changes
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
