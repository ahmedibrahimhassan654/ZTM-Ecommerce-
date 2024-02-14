import React from "react";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  LinkHeader,
  LinkPharagraf,
} from "./categoryItem.style";
import { Link } from "react-router-dom";
export default function CategoryItem({ category }) {
  const { title, id, imageUrl } = category;
  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <LinkHeader to={`shop/${title}`}>{title}</LinkHeader>
        <LinkPharagraf to={`shop/${title}`}>Shop Now</LinkPharagraf>
      </Body>
    </DirectoryItemContainer>
  );
}
