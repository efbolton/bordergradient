import React from "react";

//https://v2.tailwindcss.com/docs/guides/create-react-app
//https://github.com/facebook/create-react-app/issues/11777
//https://hackernoon.com/create-a-gradient-border-blog-postcard-using-tailwind-css-and-nextjs-a-how-to-guide
//https://tailwindcss.com/docs/background-image

function App() {
  return (
    <div className="flex flex-col text-white items-center bg-[#111827] min-h-screen ">
      content
      {/* 1st div of 2 */}
      <div className="flex bg-[#111827] w-full items-center ">
        <div className="flex items-center place-content-center w-full h-64 bg-[url('bckg.jpg')] bg-center bg-contain bg-no-repeat">
          more content
        </div>
      </div>
      {/* 
      2nd div of 2
      cyan faded border gradient 
      eg https://tailwindui.com/pricing
      */}
      <div className="rounded-lg w-52 h-64 mx-auto mt-10 bg-gradient-to-b p-[1px] from-[cyan] to-[black]">
        <div className="flex flex-col justify-between items-center h-full bg-black text-white rounded-lg p-4">
          yup even more content
        </div>
      </div>
    </div>
  );
}

export default App;
