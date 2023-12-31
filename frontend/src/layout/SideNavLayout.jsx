import { useEffect } from "react";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router";
import Modal from "../components/Modal";
import LanguageCard from "../components/LanguageCard";

const SideNavLayout = () => {
  // Sets the page title
  useEffect(() => {
    document.title = "Home"; // Set the desired page title
    return () => {
      document.title = "CodeRoom"; // Reset the title when the component unmounts
    };
  }, []);
  return (
    <div className="w-screen h-screen flex">
      {/* Side Navigational Bar */}
      <SideNav />
      {/* Enable vertical scrolling */}
      <div className="overflow-y-auto w-full ">
        <Outlet />
      </div>
      {/* Modal */}
      <Modal modalTitle="Create a Notebook">
        <div className="mt-4 gap-3 flex">
          <LanguageCard
            langTitle="Python"
            langIcon="/assets/python.png"
            langDesc="General purpose"
          />
          <LanguageCard
            langTitle="JavaScript"
            langIcon="/assets/javascript.png"
            langDesc="Web Development"
          />
        </div>
      </Modal>
    </div>
  );
};

export default SideNavLayout;
