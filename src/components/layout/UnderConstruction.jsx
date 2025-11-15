import React from "react";
import { AlertTriangle } from "lucide-react"; // optional icon

const UnderConstruction = ({
  title = "Page Under Construction",
  message = "We’re working hard to bring this page to life. Please check back soon!",
  buttonText = null,
  onButtonClick = () => {}
}) => {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center text-center px-6">
      
      {/* Icon */}
      <div className="mb-6">
        <AlertTriangle size={60} className="text-orange animate-pulse" />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h1>

      {/* Message */}
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        {message}
      </p>

      {/* Optional Button */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="px-6 py-3 bg-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange/90 transition"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default UnderConstruction;
