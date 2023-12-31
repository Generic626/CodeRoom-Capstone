import BrandLogo from "../assets/brand-logo.png";
import { MdAccessTime } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import { GrCatalogOption } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <nav
      id="sidebar"
      className="group transition-all duration-300 ease-in-out h-auto w-[70px] min-w-[70px] hover:w-[240px] hover:min-w-[240px] bg-[#504C4C] text-white hover:px-6 flex flex-col justify-between "
    >
      <div className="w-full p-2 group-hover:p-0">
        {/* Logo + Brand */}
        <div className="flex items-center justify-center mt-8 mb-6">
          <img
            src={BrandLogo}
            alt="CodeRoom Logo - Generated By StableDiffusion"
            className="w-9 h-10 group-hover:mr-2"
          />
          <div className="text-xl hidden group-hover:block">CodeRoom</div>
        </div>
        {/* Divider */}
        <hr className="mb-5" />
        {/* Create Button */}
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="bg-[#E5E5E5] rounded-2xl  text-[#5E5757] mb-7 h-[60px] w-full flex justify-center items-center"
        >
          <div className="flex items-center ">
            + <div className="hidden group-hover:block">&nbsp; Create</div>
          </div>
        </button>
        {/* Overview */}
        <NavLink
          to="/main/overview"
          className={(isActive) => (!isActive ? "bg-[#333333]" : "")}
        >
          <div className="mb-7 flex justify-center group-hover:justify-start items-center cursor-pointer">
            <GrCatalogOption className="text-white group-hover:mr-4 w-[20px] h-[20px]" />
            <div className="hidden group-hover:block">Overview</div>
          </div>
        </NavLink>
        {/* Recent */}
        <NavLink
          to="/main/recent"
          className={(isActive) => (isActive ? "active" : "")}
        >
          <div className="mb-7 flex justify-center group-hover:justify-start items-center cursor-pointer">
            <MdAccessTime className="text-white group-hover:mr-4 w-[20px] h-[20px]" />
            <div className="hidden group-hover:block">Recent</div>
          </div>
        </NavLink>
        {/* Your Notebooks */}
        <NavLink
          to="/main/your-notebooks"
          className={(isActive) => (!isActive ? "bg-[#333333]" : "")}
        >
          <div className="mb-7 flex justify-center group-hover:justify-start items-center cursor-pointer">
            <IoBookOutline className="text-white group-hover:mr-4 w-[20px] h-[20px]" />
            <div className="hidden group-hover:block">Your Notebooks</div>
          </div>
        </NavLink>
        {/* Shared With You */}
        <NavLink
          to="/main/shared-with-you"
          className={(isActive) => (!isActive ? "bg-[#333333]" : "")}
        >
          <div className="mb-7 flex justify-center group-hover:justify-start items-center cursor-pointer">
            <FaRegHandshake className="text-white group-hover:mr-4 w-[20px] h-[20px]" />
            <div className="hidden group-hover:block">Shared With You</div>
          </div>
        </NavLink>
      </div>
      <div className="mb-7 flex justify-center group-hover:justify-start group-hover:items-center">
        {/* Sign-out Button */}
        <button className="flex items-center">
          <PiSignOutBold className="text-white group-hover:mr-4 inline w-[20px] h-[20px]" />
          <div className="hidden group-hover:block">Sign-out</div>
        </button>
      </div>
    </nav>
  );
};

export default SideNav;
