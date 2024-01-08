import { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router";
import Modal from "../components/Modal";
import LanguageCard from "../components/LanguageCard";
import LoadingPage from "../pages/LoadingPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SideNavLayout = () => {
  // Sets the page title
  useEffect(() => {
    document.title = "Home"; // Set the desired page title
    return () => {
      document.title = "CodeRoom"; // Reset the title when the component unmounts
    };
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = async (lang) => {
    // 1. set is loading as true, which would render the loading modal
    setIsLoading(true);

    const input = {
      lang,
      user: { avatar: "/avatar1.png", email: "matttfung@gmail.com" },
    };

    console.log("Handle On Click");
    // 2. pass lang along the request to the backend server
    await axios
      .post("http://localhost:5001/api/notebook", input)
      .then((result) => {
        console.log("Result Receieved");
        // 3. redirect the user to the notebook page with the created notebook id
        setTimeout(() => {
          setIsLoading(false);
          navigate(`/main/notebook/${result.data.id}`);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Side Navigational Bar */}
      <SideNav />
      {/* Enable vertical scrolling */}
      <div className="overflow-y-auto w-full ">
        <Outlet />
      </div>
      {/* Modal */}
      {!isLoading && (
        <Modal
          modalTitle="Create a Notebook"
          modalBgColor="bg-[#333333]"
          modalHeight="h-[50%]"
          modalWidth="w-[60%]"
        >
          <div className="mt-4 gap-3 flex">
            <LanguageCard
              langTitle="Python"
              langIcon="/assets/python.png"
              langDesc="General purpose"
              type="python"
              onClickHandler={() => {
                handleOnClick("python");
              }}
            />
            <LanguageCard
              langTitle="JavaScript"
              langIcon="/assets/javascript.png"
              langDesc="Web Development"
              type="javascript"
              onClickHandler={() => {
                handleOnClick("javascript");
              }}
            />
          </div>
        </Modal>
      )}
      {/* Display loading screens */}
      {isLoading && <LoadingPage />}
    </div>
  );
};

export default SideNavLayout;
