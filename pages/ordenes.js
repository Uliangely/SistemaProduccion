// pages/ordenes.js

import Banner from "../components/banner";
import SideMenuOrdenes from "../components/sidemenuordenes";
import { useState, useEffect } from "react";

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [consultasActivas, setConsultasActivas] = useState([]);

  async function getOrdenes() {
    try {
      const postData = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/ordenes/route`,
        postData
      );

      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
      setOrdenes(data.ordenes);
    } catch (error) {
      console.error("Error al obtener ordenes de venta:", error);
    }
  }

  useEffect(() => {
    getOrdenes();
  }, []);

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
      <script src="https://cdn.tailwindcss.com"></script>
      <Banner title="Módulo de Producción - Ordenes de Venta" />
      <div>
        <SideMenuOrdenes />
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
        {ordenes.map((ordenes) => (
          <div key={ordenes.ID_Orden_DVenta} className="">
            <button
              onClick={() => toggleConsultaActivas(ordenes.ID_Orden_DVenta)}
              className={`mt-6 mb-2 p-2 bg-orange-300 text-black rounded-md  cursor-pointer hover:bg-purple-600 ${
                consultasActivas.includes(ordenes.ID_Orden_DVenta)
                  ? "hover:bg-purple-600"
                  : ""
              }`}
            >
              Orden de venta Nº{ordenes.ID_Orden_DVenta}
            </button>

            {consultasActivas.includes(ordenes.ID_Orden_DVenta) && (
              <div className="mb-4 p-4 bg-gray-100 rounded-md border border-black">
                <section>
                  <h2>Detalles de la Orden</h2>
                  {/* Mostrar otros campos específicos relacionados con el ID */}

                  <div class=" mt-4 relative overflow-x-auto">
                    <table class="text-center w-full text-sm text-left rtl:text-right text-gray-500 ">
                      <thead class="text-xs text-gray-700 uppercase bg-orange-300 ">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Tipo de Prenda
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Cantidad de Prenda
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Precio Unitario
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Precio Total
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Estatus de la Orden de Venta
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Informacion de Envio
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Hora de creación de la Orden de Venta
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-white border-b ">
                          <td class="px-6 py-4">{ordenes.Tipo_Prenda}</td>
                          <td class="px-6 py-4">{ordenes.Cantidad_Prenda}</td>
                          <td class="px-6 py-4">{ordenes.Precio_Unitario}$</td>
                          <td class="px-6 py-4">{ordenes.Monto_Total}</td>
                          <td class="px-6 py-4">{ordenes.Estatus}</td>
                          <td class="px-6 py-4">{ordenes.Informacion_Envio}</td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {ordenes.Fecha}
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* <p><strong>Fecha de Orden :</strong> {ordenes.Fecha}</p>
                  <p><strong>Monto total de la Orden :</strong> {ordenes.Monto_Total}$</p>
                  <p><strong>Estatus:</strong> {ordenes.Estatus}</p>
                  <p><strong>Tipo de Prenda:</strong> {ordenes.Tipo_Prenda}</p>
                  <p><strong>Cantidad de Prenda:</strong> {ordenes.Cantidad_Prenda}</p>
                  <p><strong>Informacion de Envio:</strong> {ordenes.Informacion_Envio}</p>
                  <p><strong>Precio Unitario:</strong> {ordenes.Precio_Unitario}$</p> */}
                </section>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ordenes;
