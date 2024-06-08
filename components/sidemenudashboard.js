// components/sidemenudashboard.js

import React from "react";
import Link from "next/link";

const SideMenuDash = () => {
  return (
   
    <div class="flex h-screen bg-gray-900 ">

    <div class="z-20 hidden w-64 overflow-y-auto bg-gray-800   md:block flex-shrink-0">
      <div class=" mt-24 py-4 text-gray-500 ">
        <a class="ml-6 text-lg font-bold text-white " href="/dashboard" >
          Produccion
        </a>
        <ul class="mt-6">
          <li class="mt-6 relative px-6 py-3">
            <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>

            {/* Dashboard */}
            <a
              class=" mt-4  inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 hover:text-orange-500"
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
 
   {/* Ordenes de Venta */}
            <a
              class=" mt-4 inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 hover:text-orange-500"
              href="/ordenes"
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
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
              <span class="ml-4">Ordenes de Venta</span>
            </a>

{/* Requerimientos*/}
<a
              class=" mt-4  inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 hover:text-orange-500"
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
              class=" mt-4  inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 hover:text-orange-500"
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




       

  );
};

export default SideMenuDash;
