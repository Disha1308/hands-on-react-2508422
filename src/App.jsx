import Welcome from "./Home/welcome";
import Support from "./Home/support";
import ListCast from "./Home/ListCast";
import CastInfo from "./Home/CastInfo";
import { useState } from "react";

function App() {
  const name = 'StarGazers';
  const [memberInfo, setMemberInfo]= useState(null);
  
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name="Star Disha"/>
          <Welcome name="Disha" />
          <h1>Meet the <i style={{ color: "SteelBlue" }}>{name}</i></h1>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi there')}>Click Me</button>
          <Support />
          <ListCast onChoice={(info) => setMemberInfo(info)}/>
          {memberInfo && <CastInfo info={memberInfo} />}
        </hgroup>
      </article>
    </div>
  )
}
export default App
