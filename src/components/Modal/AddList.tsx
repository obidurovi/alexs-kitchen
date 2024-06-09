"use client";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, IconButton } from "@mui/material";
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

export default function AddList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [input, setInput] = React.useState({
    name: "",
    description: "",
    thumbnail: "",
  });

  // handle input change
  const handleInputChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // handle foods form
  const handleFoodsForm = (e: any) => {
    e.preventDefault();
    if (input.name || input.description || input.thumbnail) {
      axios.post("http://localhost:5050/foods", input).then((res) => {
        setInput({
          name: "",
          description: "",
          thumbnail: "",
        });
        handleClose();
      });
    }
  };

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        className="add-button rounded-md text-base"
      >
        Add Food
      </IconButton>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <Box sx={style} className="box-class  ">
          <div className="flex flex-col justify-center w-full">
            <form onSubmit={handleFoodsForm}>
              <h1 id="spring-modal-title" className="text-3xl p-4 text-center ">
                Add Your Food
              </h1>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Food Name
                </label>
                <input
                  type="text"
                  value={input.name}
                  onChange={handleInputChange}
                  name="name"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Short Description
                </label>
                <input
                  type="text"
                  value={input.description}
                  onChange={handleInputChange}
                  name="description"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Food Image Url
                </label>
                <input
                  type="text"
                  value={input.thumbnail}
                  onChange={handleInputChange}
                  name="thumbnail"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="mb-5">
                <Button
                  type="submit"
                  id="base-input"
                  className="add-button-form  text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                >
                  Add Food
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
