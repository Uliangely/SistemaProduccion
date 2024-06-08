// components/sidemenuordenes.js

import React from 'react';
import Link from 'next/link';

const SideMenuOrdenes = () => {
  return (

    <div class=" flex h-[220rem]  bg-gray-900">
    <div class=" z-20 hidden w-64 overflow-y-auto bg-gray-800 md:block flex-shrink-0">
      <div class=" mt-24 py-4 text-gray-500 ">
        <a class="ml-6 text-lg font-bold text-white " href="/dashboard" >
          Produccion
        </a>
        <ul class="mt-6">
          <li class="mt-6 relative px-6 py-3">
            <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>

            {/* Dashboard */}
            <a
              class="mt-4 inline-flex items-center w-full text-sm font-semibold text-white  transition-colors duration-150 hover:text-orange-500"
              href="/dashboard"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span class="ml-4">Dashboard</span>
            </a>
 
{/* Requerimientos*/}
<a
              class="mt-4  inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 hover:text-orange-500"
              href="/requerimientos"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              <span class="ml-4">Requerimientos</span>
            </a>

{/* Asignaciones*/}
<a
              class="mt-4  inline-flex items-center w-full text-sm font-semibold text-white  transition-colors duration-150 hover:text-orange-500"
              href="/asignaciones"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
               <path
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  ></path>
              </svg>
              <span class="ml-4">Asignaciones</span>
            </a>
          </li>
        </ul>
      </div>     
    </div>
    </div>






    // <div className="mt-20 fixed left-0 bottom-100 bg-cyan-700 text-white p-4 w-64 flex-col justify-end h-screen z-10">
    //   <div className="mb-6">
    //     <h2 className="text-2xl font-bold">Navegación</h2>
    //   </div>
    //   <ul>
    //     <li className="mb-2">
    //       <Link href="/dashboard">
    //         Dashboard
    //       </Link>
    //     </li>
    //     <li className="mb-2">
    //       <Link href="/requerimientos">
    //         Requerimientos
    //       </Link>
    //     </li>
    //     <li className="mb-2">
    //       <Link href="/asignaciones">
    //         Asignaciones
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default SideMenuOrdenes;
