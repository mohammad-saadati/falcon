"use client";
import React, { FC } from "react";
import MasonryLayout from "react-masonry-css";
import Pin from "@/components/Item";
import { Item } from "@/types/item";

type MasonryProps = {
  items: Item[];
};

const Masonry: FC<MasonryProps> = ({ items }) => {
  return (
    <>
      <MasonryLayout
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items.map((item, index) => (
          <div
            className="col-span-12 md:col-span-3 lg:col-span-2 mx-auto"
            key={index}
          >
            <Pin item={item} />
          </div>
        ))}
      </MasonryLayout>
    </>
  );
};

export default Masonry;
