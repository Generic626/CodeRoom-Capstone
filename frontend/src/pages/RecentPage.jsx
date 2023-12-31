import { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import Avatar from "../assets/avatar1.png";
import notebookList from "../data/notebook-data";
import NotebookCard from "../components/NotebookCard";
import { MdAccessTime } from "react-icons/md";
import NothingHereCard from "../components/NothingHereCard";
import UserAvatar from "../components/UserAvatar";

const RecentPage = () => {
  useEffect(() => {
    document.title = "Recent"; // Set the desired page title
    return () => {
      document.title = "CodeRoom"; // Reset the title when the component unmounts
    };
  }, []);

  // const filteredData = notebookList
  //   .sort((a, b) => new Date(b.lastOpenAt) - new Date(a.lastOpenAt))
  //   .slice(0, 4);

  const filteredData = [];

  return (
    <div className="bg-[#ECECEC] w-full px-10 py-4 h-full">
      {/* Top Bar */}
      <div className="mb-8 flex items-center">
        {/* Search Bar */}
        <div className="flex items-center rounded-full shadow-md bg-white text-[#857676] px-2 w-full mr-2">
          <IoIosSearch className="inline w-[25px] h-[25px] mr-2" />
          <input
            type="text"
            placeholder="Search for a notebook"
            className="w-full p-2 outline-0 rounded-full"
          />
        </div>
        {/* User Avatar */}
        {/* <img
          src={Avatar}
          alt="User Avatar"
          className="w-[40px] h-[40px] rounded-full cursor-pointer"
        /> */}
        <UserAvatar />
      </div>
      {/* Recent Page Content */}
      <div className="w-full bg-white rounded-lg shadow-lg py-8 px-6">
        {/* Title */}
        <div className="flex items-center mb-4">
          <MdAccessTime className="mr-2 w-[25px] h-[25px]" />
          <div className="font-bold text-2xl">Recent</div>
        </div>
        {/* Notebook List */}
        {filteredData.length > 0 ? (
          <div className="w-full grid grid-cols-4 gap-4 mb-4">
            {filteredData.map((notebook, index) => {
              return <NotebookCard data={notebook} key={index} />;
            })}
          </div>
        ) : (
          <div className="w-full">
            <NothingHereCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentPage;
