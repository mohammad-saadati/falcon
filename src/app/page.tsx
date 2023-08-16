import Pin from "@/components/Item";
import { Item } from "@/types/item";

interface HomeProps {
  data: Item[];
}

export default async function Home() {
  const reqBody = { after: 0, limit: 10, filters: {}, sort: {} };
  let items: Item[];

  try {
    const res = await fetch("https://didanist.com/api/v1_0/home_page/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const data = await res.json();

    console.log("data", data.result.data);

    items = data.result.data;

    return (
      <div className="grid grid-cols-12 gap-4">
        {items.map((item, index) => (
          <div className="col-span-12 md:col-span-3 lg:col-span-2 mx-auto" key={index}>
            <Pin item={item} />
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
  }

  return <div>no</div>;
}
