import React from "react";

const LoadingPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#135c17] to-[#229627] h-screen w-screen flex items-center justify-center">
      <div className="animate-pulse rounded-full h-20 w-20 border-4 border-white"></div>
    </div>
  );
};

export default LoadingPage;