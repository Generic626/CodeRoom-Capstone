import { MdAccessTime } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import notebookList from "../data/notebook-data";
import NotebookCard from "./NotebookCard";
import NothingHereCard from "./NothingHereCard";

export const Recent = () => {
  // Step 1. Fetch from mongoose
  // const filteredData = notebookList
  //   .sort((a, b) => new Date(b.lastOpenAt) - new Date(a.lastOpenAt))
  //   .slice(0, 4);

  const filteredData = [];

  return (
    <div className="w-full bg-white rounded-lg shadow-lg py-8 px-6">
      {/* Title */}
      <div className="flex items-center mb-4">
        <MdAccessTime className="mr-2 w-[25px] h-[25px]" />
        <div className="font-bold text-2xl">Recent</div>
      </div>
      {/* Notebook List */}
      {/* <div className="w-full grid grid-cols-4 gap-4 mb-4">
        {filteredData.map((notebook, index) => {
          return <NotebookCard data={notebook} key={index} />;
        })}
      </div> */}
      {filteredData.length > 0 ? (
        <div className="w-full grid grid-cols-4 gap-4 mb-4">
          {filteredData.map((notebook, index) => {
            return <NotebookCard data={notebook} key={index} />;
          })}
        </div>
      ) : (
        <div className="w-full h-auto">
          <NothingHereCard />
        </div>
      )}
      <Link to="/main/recent">
        <div className="flex items-center justify-end">
          <MdOutlineKeyboardDoubleArrowRight className="h-[20px] w-[20px]" />
          <div>Go to Recent</div>
        </div>
      </Link>
    </div>
  );
};

export const YourNotebook = () => {
  // Step 1. Fetch from mongoose where author.email = the user
  // (No need to additionally filter result)
  const filteredData = notebookList.filter(
    (item) => item.author.email === "matttfung@gmail.com"
  );

  return (
    <div className="w-full bg-white rounded-lg shadow-lg py-8 px-6">
      {/* Title */}
      <div className="flex items-center mb-4">
        <IoBookOutline className="mr-2 w-[25px] h-[25px]" />
        <div className="font-bold text-2xl">Your Notebooks</div>
      </div>
      {/* Notebook List */}
      {/* <div className="w-full grid grid-cols-4 gap-4">
        {filteredData.map((notebook, index) => {
          return <NotebookCard data={notebook} key={index} />;
        })}
      </div> */}
      {filteredData.length > 0 ? (
        <div className="w-full grid grid-cols-4 gap-4 mb-4">
          {filteredData.map((notebook, index) => {
            return <NotebookCard data={notebook} key={index} />;
          })}
        </div>
      ) : (
        <div className="w-full h-auto">
          <NothingHereCard />
        </div>
      )}
      <Link to="/main/your-notebooks">
        <div className="flex items-center justify-end">
          <MdOutlineKeyboardDoubleArrowRight className="h-[20px] w-[20px]" />
          <div>Go to Your Notebooks</div>
        </div>
      </Link>
    </div>
  );
};

export const SharedWithYou = () => {
  // Step 1. Fetch from mongoose where sharedWith.email = the user
  // (No need to additionally filter result)
  const filteredData = notebookList.filter(
    (item) => item.sharedWith.email === "matttfung@gmail.com"
  );
  return (
    <div className="w-full bg-white rounded-lg shadow-lg py-8 px-6">
      {/* Title */}
      <div className="flex items-center mb-4">
        <FaRegHandshake className="mr-2 w-[25px] h-[25px]" />
        <div className="font-bold text-2xl">Shared With You</div>
      </div>
      {/* Notebook List */}
      {/* <div className="w-full grid grid-cols-4 gap-4">
        {filteredData.map((notebook, index) => {
          return <NotebookCard data={notebook} key={index} />;
        })}
      </div> */}
      {filteredData.length > 0 ? (
        <div className="w-full grid grid-cols-4 gap-4 mb-4">
          {filteredData.map((notebook, index) => {
            return <NotebookCard data={notebook} key={index} />;
          })}
        </div>
      ) : (
        <div className="w-full h-auto">
          <NothingHereCard />
        </div>
      )}
      <Link to="/main/shared-with-you">
        <div className="flex items-center justify-end">
          <MdOutlineKeyboardDoubleArrowRight className="h-[20px] w-[20px]" />
          <div>Go to Shared With You</div>
        </div>
      </Link>
    </div>
  );
};
