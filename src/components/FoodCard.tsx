"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Food } from "@/types";
import ViewModal from "./Modal/ViewModal";
import EditModal from "./Modal/EditModal";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function FoodCard({ food }: { food: Food }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: "rgba(218, 211, 190, 0.4)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title={food.name}
      />
      <CardMedia component="img" height="194" image={food.thumbnail} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {food.description}
        </Typography>
      </CardContent>
      <CardActions
        className="flex px-4 mb-2"
        disableSpacing
        sx={{ mt: "auto" }}
      >
        <IconButton aria-label="view">
          <ViewModal food={food} />
        </IconButton>

        <IconButton aria-label="edit">
          <EditModal />
        </IconButton>
        <IconButton aria-label="delete">
          <MdDelete />
        </IconButton>
      </CardActions>
    </Card>
  );
}
