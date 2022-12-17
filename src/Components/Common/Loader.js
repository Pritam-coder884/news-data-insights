import React from 'react'

function Loader() {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-8 h-8 border-b-4 border-error rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader