import React from "react";

const Tags =({tagTitle})=>{
    return(
<>
<div className="p-5">
  <div className="bg-blue-100 inline-block rounded-lg px-3 py-1">
    <div className="text-blue-700 font-semibold text-sm rounded">

      <span>{tagTitle}</span>
    </div>
  </div>
</div>


</>
    );
}

export default Tags;