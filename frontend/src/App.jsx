import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import SideNavLayout from "./layout/SideNavLayout";
import NotebookPage from "./pages/NotebookPage";
import RecentPage from "./pages/RecentPage";
import YourNotebooksPage from "./pages/YourNotebooksPage";
import SharedWithYouPage from "./pages/SharedWithYouPage";
import OverViewPage from "./pages/OverViewPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<SideNavLayout />}>
        <Route path="overview" element={<OverViewPage />} />
        <Route path="notebook/:documentId" element={<NotebookPage />} />
        <Route path="recent" element={<RecentPage />} />
        <Route path="your-notebooks" element={<YourNotebooksPage />} />
        <Route path="shared-with-you" element={<SharedWithYouPage />} />
        <Route path="*" element={<OverViewPage />} />
      </Route>
    </Routes>
  );
};

export default App;
