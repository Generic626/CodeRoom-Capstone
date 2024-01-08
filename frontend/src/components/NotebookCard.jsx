import pythonIcon from "../assets/python.png";
import jsIcon from "../assets/js.png";
import { FaRegTrashAlt } from "react-icons/fa";

const NotebookCard = ({ data }) => {
  const code_lang_icon = data.type === "python" ? pythonIcon : jsIcon;

  return (
    <div className="rounded-lg bg-[#504C4C] h-[180px]  p-4 text-white flex flex-col justify-between cursor-pointer">
      {/* Card Title */}
      <div className="flex items-center justify-between">
        <div className="flex">
          {/* Language Icon + Notebook Title */}
          <img src={code_lang_icon} alt="Code Lang Icon" className="mr-2" />
          <div>
            {data.title.length < 20
              ? data.title
              : data.title.substring(0, 20) + "..."}
          </div>
        </div>
        {/* Trashcan Button */}
        <FaRegTrashAlt className="text-red-500" />
      </div>

      {/* Author + Last Open At*/}
      <div>
        {/* Author */}
        <div className="flex items-center">
          <img
            src={data.author.avatar}
            alt="Author's Avatar"
            className="rounded-full w-[30px] h-[30px] mr-2"
          />
          <div>{data.author.email}</div>
        </div>
        {/* Open At */}
        <div>Last Open - {data.lastOpenAt}</div>
      </div>
    </div>
  );
};

export default NotebookCard;
