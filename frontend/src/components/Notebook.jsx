import Editor from "@monaco-editor/react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Notebook = ({ data }) => {
  return (
    <div>
      {/* Top Bar */}
      <div className="h-[60px] flex items-center justify-between px-4 bg-white">
        {/* Back Button + Title Input */}
        <div className="flex items-center">
          {/* Back Button */}
          <NavLink to="/main/overview">
            <FaArrowLeft className="mr-4 cursor-pointer bg-white" />
          </NavLink>

          {/* Title Input */}
          <input
            type="text"
            placeholder="Enter a title here"
            className="outline-0 text-lg font-bold"
            value={data.title}
          />
        </div>
        {/* Language + Avatars */}
        <div className="flex items-center">
          <img
            src={`/assets/${data.type}.png`}
            alt="Language Type Icon"
            className="mr-4"
          />
          <img
            src={data.author.avatar}
            alt="User's Avatar"
            className="rounded-full w-[40px] h-[40px]"
          />
        </div>
      </div>
      {/* Code Editor + Output */}
      <div className="flex">
        {/* Code Editor */}
        <div className="w-[50%]">
          <Editor
            // height="100vh"
            className="h-screen"
            defaultLanguage={data.type}
            theme="vs-dark"
            // onChange={handleCodeEditorChange}
            options={{
              scrollBeyondLastLine: false,
              fontSize: "18px",
            }}
            value={data.code}
          />
        </div>
        {/* Output */}
        <div className="w-[50%] h-screen bg-[#333333] text-white border border-gray-500 py-2 px-4">
          Output
          <hr className="w-full mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Notebook;
