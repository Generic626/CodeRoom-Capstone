// import { useEffect } from "react";
// import SideNav from "../components/SideNav";
// import HomeContent from "../components/HomeContent";
// import Notebook from "../components/Notebook";
// import notebookList from "../data/notebook-data";

// // DEPRECATED

// const MainPage = () => {
//   // Sets the page title
//   useEffect(() => {
//     document.title = "Home"; // Set the desired page title
//     return () => {
//       document.title = "CodeRoom"; // Reset the title when the component unmounts
//     };
//   }, []);

//   return (
//     <div className="w-screen h-screen flex">
//       {/* Side Navigational Bar */}
//       <SideNav />
//       {/* Enable vertical scrolling */}
//       <div className="overflow-y-auto w-full">
//         {/* Home Page Content*/}
//         {/* <HomeContent /> */}

//         {/* Create Code Editor */}
//         <Notebook data={notebookList[0]} />

//         {/* Open Notebook */}
//       </div>
//       {/* Modal */}
//     </div>
//   );
// };

// export default MainPage;
