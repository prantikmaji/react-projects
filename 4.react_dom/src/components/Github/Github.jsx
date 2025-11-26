import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();

    //way - 1 to call api
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch("https://api.github.com/users/prantikmaji")
//       .then((res) => res.json())
//       .then((res) => setData(res));
//       console.log(data);
//   }, []);

  return (
    // START: Added Tailwind Classes
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="github picture"/>
    </div>
    // END: Added Tailwind Classes
  );
}

export default Github;


//way 2 to call api with loader
 export const githubInfoLoader = async function () {
     const response = await fetch("https://api.github.com/users/prantikmaji");
     return response.json();
      
    
};

