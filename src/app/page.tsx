import Masonry from "@/components/Masonry";
import { Item } from "@/types/item";
import SigninButton from "@/components/SigninButton";

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

    // console.log("data", data.result.data);

    items = data.result.data;

    return (
      <div className="">
        {/* <Masonry items={items} /> */}
        <SigninButton />
      </div>
    );
  } catch (error) {
    console.log(error);
  }

  return <div>no</div>;
}
