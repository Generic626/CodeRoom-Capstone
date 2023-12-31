import { useEffect } from "react";
import notebookList from "../data/notebook-data";
import Notebook from "../components/Notebook";

const NotebookPage = () => {
  // useParams to fetch url parameters

  // when documentId is passed : pass it to the Notebook component
  // when no documentId is passed : create default notebook (POST create notebook request)

  useEffect(() => {
    document.title = "Notebook"; // Set the desired page title
    return () => {
      document.title = "CodeRoom"; // Reset the title when the component unmounts
    };
  }, []);

  return <Notebook data={notebookList[0]} doumentId="" />;
};

export default NotebookPage;
