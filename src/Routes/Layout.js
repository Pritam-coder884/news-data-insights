import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Desktopheader from '../Components/Common/Header/Desktopheader';
import Modal from '../Components/Common/Modal';
import Sidebar from '../Components/Sidebar/Sidebar';

function Layout() {
 const [open, setOpen] = useState(false);



  return (
    <>
      <div className="flex w-full overflow-hidden ">
        <div className="  h-[100vh]">
          <Sidebar />
        </div>
        <div className="w-full flex flex-col h-[100vh] overflow-y-auto">
          <Desktopheader
            paymentText={"Review Payment"}
            ModalOpen={() => setOpen(!open)}
          />
          <Outlet />
        </div>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        closeModal={() => setOpen(!open)}
        extraClasses={"w-full z-100 h-full mt-0 p-4 mb-0 "}
        padding={"px-0"}
      >
        <Sidebar
          extraClasses={"w-full border-none p-0"}
          extraClassLogo={"hidden"}
        />
      </Modal>
    </>
  );
}

export default Layout