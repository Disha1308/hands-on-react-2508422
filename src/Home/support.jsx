import { useState } from "react";

function Support () {
  const [count, setCount] = useState(0);
  const [view, setView] = useState(0);

  return (
    <div>
      <button className="outline"
        onClick={()=> setCount(count+1)}>
          Supported {count}
      </button>

      <button className="outline"
          onClick={() => setView(view + 1)}>
          { view === 0 ? "Click to View" : `View ${view}`}
      </button>
    </div>
    
  )
}

export default Support;