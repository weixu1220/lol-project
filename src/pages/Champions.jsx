import { Link } from "react-router-dom";
import { useChampsContext } from '../ChampsContext';
import { useDispatch, useSelector } from 'react-redux'
import { AddChamp } from '../ChampsSlice'
import { useState } from "react";

function Champions() {
  const { champs } = useChampsContext();
  const myChamps = useSelector(state => state.champs.myChamps)
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState('');

  function isChampionAdded(champName) {
    // Check if the champion is already added in the Redux state
    return myChamps.some((champ) => champ.champName === champName);
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function loaded() {
    const names = Object.keys(champs);

    // Filter champions based on the search input
    const filteredChampions = names.filter((item) =>
      champs[item]['name'].toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayItems = [];
    let placeholderUrl = "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Aatrox.png";

    const onImageError = (e) => {
      e.target.src = placeholderUrl;
    };

    for (let item of filteredChampions) {
      let champName = champs[item]['name'];
      let imgUrl = `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${champs[item]['image']['full']}`;
      const isAdded = isChampionAdded(champName);

      displayItems.push(
        <div className="flex-col w-48 h-64 justify-center border-2 p-5 m-5 rounded-xl hover:shadow-2xl" key={champName}>
          <Link className='flex-col justify-center' to={`./${champName}`}>
            <img className="w-32 h-32 p-1" src={imgUrl ? imgUrl : placeholderUrl} alt={champName} onError={onImageError} />
            <p className="text-2xl text-center">{champName}</p>
          </Link>
          {!isAdded && <button className="border-2 rounded-md m-2 p-2 hover:shadow-xl bg-amber-450" onClick={() => dispatch(AddChamp({ champName, imgUrl }))}>Add Champion</button>}
        </div>
      );
    }

    return (
      <div className=" w-11/12 flex flex-wrap justify-center my-5 mx-auto p-1">
        {displayItems}
      </div>
    );
  }

  function loading() {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search champions..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mx-auto border-2 rounded-md p-2 mb-4"
      />

      {!champs ? loading() : loaded()}
    </div>
  );
}

export default Champions;