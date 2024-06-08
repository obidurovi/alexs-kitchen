"use client";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Food } from "@/types";
import { FaEye } from "react-icons/fa";
import { IconButton } from "@mui/material";

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

export default function TransitionsModal({ food }: { food: Food }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <FaEye />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex flex-col justify-center items-center">
              <img
                src={food.thumbnail}
                className="object-cover rounded-2xl size-full content-center"
              ></img>
              <h1 id="spring-modal-title" className="text-3xl p-4 text-center">
                {food.name}
              </h1>
              <p
                id="spring-modal-description"
                className="text-center text-base"
              >
                {food.description}
              </p>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
