import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useChampsContext } from "../ChampsContext";

function Items() {
  const { items } = useChampsContext();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {}, [searchTerm]);

  function loaded() {
    const itemIDs = Object.keys(items);
    const displayItems = [];
    let placeholderUrl = `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/1001.png`;
    const onImageError = (e) => {
      e.target.src = placeholderUrl;
    };
    const filteredItems = itemIDs.filter((itemID) =>
      items[itemID]["name"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Function to extract the text between two tags
    const extractTextBetweenTags = (text, tag) => {
      const startTag = `<${tag}>`;
      const endTag = `</${tag}>`;
      const startIndex = text.indexOf(startTag) + startTag.length;
      const endIndex = text.indexOf(endTag);
      return text.substring(startIndex, endIndex);
    };

    for (let itemID of filteredItems) {
      let itemName = items[itemID]["name"];
      let imgUrl = `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${items[itemID]["image"]["full"]}`;
      displayItems.push(
        <div
          className="w-40 h-56  border-2 p-2 m-5 rounded-xl hover:shadow-2xl"
          key={itemID}
        >
          <Link
            className=" flex flex-col justify-center items-center mx-auto p-1"
            to={`./${itemID}`}
          >
            <img
              className="p-1 m-1 image"
              src={imgUrl ? imgUrl : placeholderUrl}
              alt={itemName}
              onError={onImageError}
            />
            <p className=" w-20 text-center p-1">
              {itemName.includes("<")
                ? extractTextBetweenTags(itemName, "rarityLegendary")
                : itemName}
            </p>
          </Link>
        </div>
      );
    }
    return (
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Search items by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mx-auto border-2 rounded-md p-2 mt-10 dark:text-black"
        />
        <div className="w-11/12 flex flex-wrap justify-center mx-auto my-5 p-1 ">
          {displayItems}
        </div>
      </div>
    );
  }

  function loading() {
    return <p>Loading...</p>;
  }

  return !items ? loading() : loaded();
}

export default Items;
