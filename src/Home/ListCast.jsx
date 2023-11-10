import { useState, useEffect } from "react";

export default ({onChoice}) => {
  const  [cast, setCast] = useState([]);

  async function fetchCast () {
    let response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect (() => {
      fetchCast();
  })

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap:`1rem`,
      marginBotton:`1rem`
    }}>
      {cast.map(member => (
        <a key={member.id} data-tooltip={member.name}>
          <img src={`images/${member.slug}_tn.svg`} alt={member.name}
           onClick={() => onChoice(member)}
          />
        </a>       
      )
      )}

    </div>
  )
  

}