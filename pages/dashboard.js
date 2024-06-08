// pages/Dashboard.js

import Banner from "../components/banner";
import SideMenuDash from "../components/sidemenudashboard";
import Link from "next/link";
import Image from "next/image";


const Dashboard = () => {
  return (
    <div className="">
      <script src="https://cdn.tailwindcss.com"></script>
      <Banner title="Módulo de Producción - Dashboard" />
      <div>
        <SideMenuDash />
      </div>

      <div className=" flex bg-gray-900 fixed left-80 mt-9 top-20 ">


        <h2 className="y-6 text-2xl font-semibold text-gray-200 ">Bienvenidos al modulo Producción</h2>


        <Image src="/dashboard.svg"
          className="mt-20"
          alt=""
          width={500}
          height={500}
        />

      </div>
    </div>
  );
};

export default Dashboard;
