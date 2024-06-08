import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import SideMenuAsignaciones from "../components/sidemenuasignaciones";

const Asignaciones = () => {
  const [asignaciones, setAsignaciones] = useState([]);
  const [consultasActivas, setConsultasActivas] = useState([]);
  

  async function getAsignaciones() {
    try {
      const postData = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };


      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/asignaciones/route`,
        postData
      );

      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
      setAsignaciones(data.asignaciones);
    } catch (error) {
      console.error("Error al obtener asignaciones:", error);
    }
  }

  useEffect(() => {
    getAsignaciones();
  }, []); // Se ejecuta solo una vez al montar el componente

  const toggleConsultaActivas = (consultaId) => {
    setConsultasActivas((prevConsultasActivas) => {
      if (prevConsultasActivas.includes(consultaId)) {
        return prevConsultasActivas.filter((id) => id !== consultaId);
      } else {
        return [...prevConsultasActivas, consultaId];
      }
    });
  };

  return (
    <div>
<div>
    <script src="https://cdn.tailwindcss.com"></script>
          <Banner title="Módulo de Producción - Asignaciones" />
          <div>
            <SideMenuAsignaciones />
          </div>
    </div>
  
    <div>
      <script src="https://cdn.tailwindcss.com"></script>
      <Banner title="Módulo de Producción - Asignaciones" />
      <div>
        <SideMenuAsignaciones />
      </div>
      <div className="absolute fixed left-80 flex-col justify-end mt-24 space-x-4 fixed left-80 mt-20 top-10">

{/* Barra buscadora */}

<div class="flex justify-center flex-1 lg:mr-32">
          <div class="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div class="absolute inset-y-0 flex items-center pl-2">
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
            </div>
            <input
              class="w-full h-8 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
              type="text"
              placeholder="Buscar"
              aria-label="Search"
            />
          </div>
        </div>

  {/* Boton */}
        {asignaciones.map((asignacion) => (
          <div key={asignacion.Detalles_OrdenesDeVentas_ID_Detalle_ODV} className="">
            <button
              onClick={() => toggleConsultaActivas(asignacion.Detalles_OrdenesDeVentas_ID_Detalle_ODV)}
              className={` mt-6  mb-2 p-2 bg-orange-300 text-black rounded-md   cursor-pointer hover:bg-purple-600 ${
                consultasActivas.includes(asignacion.Detalles_OrdenesDeVentas_ID_Detalle_ODV) ? "hover:bg-purple-600" : ""
              }`}
            >
              Asignación Nº{asignacion.Detalles_OrdenesDeVentas_ID_Detalle_ODV}
            </button>

            {consultasActivas.includes(asignacion.Detalles_OrdenesDeVentas_ID_Detalle_ODV) && (
              <div className=" mb-4 p-4 bg-gray-100 rounded-md border border-black">
                <section>
                  <h2>Detalles de la Asignación</h2>
                  {/* Mostrar otros campos específicos relacionados con el ID */}


                   <div class=" mt-4 relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-orange-300">
            <tr>
                <th scope="col" class="px-6 py-3">Tipo_Prenda</th>
                <th scope="col" class="px-6 py-3">Cantidad_Prenda</th>
                <th scope="col" class="px-6 py-3">Informacion_Envio</th>
                <th scope="col" class="px-6 py-3">Fecha_Orden</th>
                <th scope="col" class="px-6 py-3">Nombre del insumo</th>
                <th scope="col" class="px-6 py-3">Descripcion</th>
                <th scope="col" class="px-6 py-3">Categoria</th>
                <th scope="col" class="px-6 py-3">Nombre del personal</th>
                <th scope="col" class="px-6 py-3">Tipos_Personal</th>
                <th scope="col" class="px-6 py-3">Horario</th>

            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {asignacion.Tipo_Prenda}
                </th>
                <td class="px-6 py-4">
                {asignacion.Cantidad_Prenda}
                </td>
                <td class="px-6 py-4">
                {asignacion.Informacion_Envio}
                </td>
                <td class="px-6 py-4">
                {asignacion.Fecha_Orden}
                </td>
                <td class="px-6 py-4">
                {asignacion.Nombre_Insumo}
                </td>
                <td class="px-6 py-4">
                {asignacion.Descripcion}
                </td>
                <td class="px-6 py-4">
                {asignacion.Categoria}
                </td>
                <td class="px-6 py-4">
                {asignacion.Nombre_Personal}
                </td>
                <td class="px-6 py-4">
                {asignacion.Tipos_Personal}
                </td>
                <td class="px-6 py-4">
                {asignacion.Horario}
                </td>
            </tr>
                     
        </tbody>
    </table>
</div> 


                </section>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>

  );
};

export default Asignaciones;
