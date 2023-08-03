import { useEffect, useState } from "react";
import { useChampsContext } from "../ChampsContext";

function CompareChamps() {
  const [champ1, setChamp1] = useState("");
  const [champ2, setChamp2] = useState("");
  const { champs } = useChampsContext();
  const [submitted, setSubmitted] = useState(false);
  const [suggestedNamesChamp1, setSuggestedNamesChamp1] = useState([]);
  const [suggestedNamesChamp2, setSuggestedNamesChamp2] = useState([]);

  function handleChamp1(e) {
    const champName = e.target.value;
    setChamp1(
      champName.charAt(0).toUpperCase() + champName.slice(1).toLowerCase()
    );
    if (champs[champName]) {
        setSuggestedNamesChamp1([]);
      } else {
        suggestChampionNames(champName, setSuggestedNamesChamp1);
      }
  }
  function handleChamp2(e) {
    const champName = e.target.value;
    setChamp2(
      champName.charAt(0).toUpperCase() + champName.slice(1).toLowerCase()
    );
    if (champs[champName]) {
        setSuggestedNamesChamp2([]);
      } else {
        suggestChampionNames(champName, setSuggestedNamesChamp2);
      }
  }
  function suggestChampionNames(champName, setSuggestedNames) {
    const suggestions = Object.keys(champs).filter((name) =>
      name.toLowerCase().includes(champName.toLowerCase())
    );
    setSuggestedNames(suggestions);
  }

  function handleSuggestedClick(championName, setChampionName) {
    setChampionName(championName);
    setSuggestedNamesChamp1([]);
    setSuggestedNamesChamp2([]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function displayChamp(champ) {
    if (champ && champs[champ]) {
      let imgUrl = `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${champs[champ]["image"]["full"]}`;
      return (
        <div className="w-4/12 mx-auto text-xl p-1 m-1">
          <h1 className="text-center text-3xl">{champs[champ].name}</h1>
          <img src={imgUrl} />
          <h2 className="border-2 p-2">Title: {champs[champ].title}</h2>
          <p className="border-2 p-2">Version: {champs[champ].version}</p>
          <p className="border-2 p-2">Resource: {champs[champ].partype}</p>
          <div className="info">
            <p className="border-2 p-2">Attack: {champs[champ].info?.attack}</p>
            <p className="border-2 p-2">
              Defense: {champs[champ].info?.defense}
            </p>
            <p className="border-2 p-2">Magic: {champs[champ].info?.magic}</p>
            <p className="border-2 p-2">
              Difficulty: {champs[champ].info?.difficulty}
            </p>
          </div>
          <div className="stats">
            <p className="border-2 p-2">HP: {champs[champ].stats?.hp}</p>
            <p className="border-2 p-2">
              HP per level: {champs[champ].stats?.hpperlevel}
            </p>
            <p className="border-2 p-2">
              HP regen: {champs[champ].stats?.hpregen}
            </p>
            <p className="border-2 p-2">
              HP regen per level: {champs[champ].stats?.hpregenperlevel}
            </p>
            <p className="border-2 p-2">MP: {champs[champ].stats?.mp}</p>
            <p className="border-2 p-2">
              MP per level: {champs[champ].stats?.mpperlevel}
            </p>
            <p className="border-2 p-2">
              MP regen: {champs[champ].stats?.mpregen}
            </p>
            <p className="border-2 p-2">
              mP regen per level: {champs[champ].stats?.mpregenperlevel}
            </p>
            <p className="border-2 p-2">Armor: {champs[champ].stats?.armor}</p>
            <p className="border-2 p-2">
              Armor per level: {champs[champ].stats?.armorperlevel}
            </p>
            <p className="border-2 p-2">
              Attack range: {champs[champ].stats?.attackrange}
            </p>
            <p className="border-2 p-2">
              Attack speed: {champs[champ].stats?.attackspeed}
            </p>
            <p className="border-2 p-2">
              Attack speed per level: {champs[champ].stats?.attackspeedperlevel}
            </p>
            <p className="border-2 p-2">Crit: {champs[champ].stats?.crit}</p>
            <p className="border-2 p-2">
              Crit per level: {champs[champ].stats?.critperlevel}
            </p>
            <p className="border-2 p-2">
              Movement speed: {champs[champ].stats?.movespeed}
            </p>
            <p className="border-2 p-2">
              Magic resist: {champs[champ].stats?.spellblock}
            </p>
            <p className="border-2 p-2">
              Magic resist per level: {champs[champ].stats?.spellblockperlevel}
            </p>
          </div>
        </div>
      );
    } else if (champ) {
      return <div>{champ} does not exist!</div>;
    } else {
      return null;
    }
  }
  return (
    <div className="compare">
      <p className="text-center m-5">
        Compare Champions page still in progress
      </p>
      <form
        className="flex flex-col flex-wrap justify-center items-center p-1 m-1"
        action="submit"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex justify-center">
          <div className="w-6/12 flex-col justify-center">
            <label className="text-center p-2 m-1">
              Champion 1 Name:
              <input
                className="border-2 p-2 m-1"
                type="text"
                placeholder="Champion 1 Name"
                value={champ1}
                onChange={handleChamp1}
              />
            </label>
            {suggestedNamesChamp1.length > 0 && (
              <ul className="max-w-[90%] flex flex-wrap justify-center">
                <p className="text-center p-2 m-1">Do you mean:</p>
                {suggestedNamesChamp1.map((name) => (
                  <li
                    className="m-1 p-2 bg-blue-900 text-amber-400 rounded-md"
                    key={name}
                    onClick={() => handleSuggestedClick(name, setChamp1)}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="w-6/12 flex-col justify-center">
            <label className="text-center p-2 m-1">
              Champion 2 Name:
              <input
                className="border-2 p-2 m-1"
                type="text"
                placeholder="Champion 2 Name"
                value={champ2}
                onChange={handleChamp2}
              />
            </label>
            {suggestedNamesChamp2.length > 0 && (
              <ul className="max-w-[90%] flex flex-wrap justify-center">
                <p className="text-center p-2 m-1">Do you mean:</p>
                {suggestedNamesChamp2.map((name) => (
                  <li
                    className="m-1 p-2 bg-blue-900 text-amber-400 rounded-md"
                    key={name}
                    onClick={() => handleSuggestedClick(name, setChamp2)}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button
          className="w-fit bg-blue-900 text-amber-400 rounded-md m-5 p-2"
          type="submit"
        >
          Compare
        </button>
      </form>
      {submitted && (
        <div className="flex">
          {displayChamp(champ1)}
          {displayChamp(champ2)}
        </div>
      )}
    </div>
  );
}

export default CompareChamps;
