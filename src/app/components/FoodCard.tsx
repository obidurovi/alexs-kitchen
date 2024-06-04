"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { MdFavorite } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { FaExpandAlt } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: "rgba(218, 211, 190, 0.4)" }}>
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.shopify.com/s/files/1/0070/7032/files/food-photgraphy-tips.png?v=1657891849"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <MdFavorite />
        </IconButton>
        <IconButton aria-label="share">
          <IoMdShare />
        </IconButton>
      </CardActions>
    </Card>
  );
}
