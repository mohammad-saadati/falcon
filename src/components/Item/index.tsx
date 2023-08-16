import Image from "next/image";
import React, { FC } from "react";
import { Item } from "@/types/item";

type ItemProps = {
  item: Item;
};

const Item: FC<ItemProps> = ({ item }) => {
  return (
    <div className="">
      <Image
        src={item.images.small.url}
        width={item.images.small.width}
        height={item.images.small.height}
        alt={item.title}
      />
      {item.title}
    </div>
  );
};

export default Item;
