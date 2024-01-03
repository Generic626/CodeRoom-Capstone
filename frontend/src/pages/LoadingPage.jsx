import CircularProgress from "@mui/material/CircularProgress";
const LoadingPage = () => {
  return (
    <div className="bg-[#333333] h-screen w-screen fixed flex flex-col justify-center items-center text-white">
      <img
        src="/brand-logo.png"
        alt="Loading Logo"
        className="w-[80px] h-[90px] mb-4 "
      />
      <CircularProgress color="inherit" />
    </div>
  );
};

export default LoadingPage;
