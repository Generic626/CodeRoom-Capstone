import Editor from "@monaco-editor/react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Modal from "./Modal.jsx";

const Notebook = ({ data }) => {
  return (
    <div>
      {/* Top Bar */}
      <div className="h-[60px] flex items-center justify-between px-4 bg-[#D9D9D9]">
        {/* Back Button + Title Input */}
        <div className="flex items-center">
          {/* Back Button */}
          <NavLink to="/main/overview">
            <FaArrowLeft className="mr-4 cursor-pointer bg-[#D9D9D9]" />
          </NavLink>

          {/* Title Input */}
          <input
            type="text"
            placeholder="Enter a title here"
            className="outline-0 text-lg font-bold bg-[#D9D9D9]"
            value={data.title}
          />
        </div>
        {/* Share Button + Language + Avatars */}
        <div className="flex items-center">
          <button
            className="mr-4 text-white bg-blue-400 px-4 py-1 rounded-lg"
            onClick={handleModalOnClick}
          >
            Share
          </button>
          {/* Language + Avatars */}
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
        <div className="w-[50%] h-screen bg-[#333333] text-white ">
          {/* Output
          <hr className="w-full mt-2" /> */}
          <div className="text-black bg-white h-[50px] w-full p-2">
            {/* Top Bar */}
            <div className="flex w-full justify-between items-center">
              <div className="font-bold">Output</div>
              <button className=" text-white bg-green-500 px-4 py-1 rounded-lg">
                Compile
              </button>
            </div>
          </div>
        </div>
        {/* Modal */}
        {/* <Modal
          modalTitle={`Share '${data.title}' `}
          modalBgColor="bg-[#333333]"
          modalHeight="h-[50%]"
          modalWidth="w-[60%]"
        ></Modal> */}
      </div>
    </div>
  );
};

export default Notebook;
