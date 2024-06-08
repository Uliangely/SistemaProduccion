// pages/requerimientos.js
import React, { useState, useEffect, use } from "react";
import Modal from "react-modal";
import Banner from "../components/banner.js";
import SideMenuRequerimientos from "../components/sidemenurequerimientos.js";

const Requerimientos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [requerimientoId, setRequerimientoId] = useState(null);

  const [requerimientos, setRequerimientos] = useState([]);
  const [consultasActivas, setConsultasActivas] = useState([]);
  const [selectedPersonal1, setSelectedPersonal1] = useState();
  const [selectedPersonal2, setSelectedPersonal2] = useState();
  const [selectedRecurso1, setSelectedRecurso1] = useState();
  const [selectedRecurso2, setSelectedRecurso2] = useState();
  const [selectedRecurso3, setSelectedRecurso3] = useState();
  const [selectedRecurso4, setSelectedRecurso4] = useState();
  const [Recurso, setRecurso] = useState([]);
  const [Personal, setPersonal] = useState([]);
  const [cantidadRecurso1, setCantidadRecurso1] = useState(null);
  const [cantidadRecurso2, setCantidadRecurso2] = useState(null);

  const [selectRecursosIds, setSelectRecursosIds] = useState([])
  const [selectPesonalIds, setSelectPesonalIds] = useState([])


  const agregarNuevaOpcion = () => {
    const auxNuevo = { id: 0 }
    setSelectRecursosIds(selectRecursosIds => [...selectRecursosIds, [auxNuevo]]);
    
  }


  const agregarNuevaOpcion1 = () => {
    const auxNuevo = { id: 0 }
    setSelectPesonalIds(selectPesonalIds => [...selectPesonalIds, [auxNuevo]]);
  }

  const eliminarNuevaOpcion = (index) => {
    // const aux = selectRecursosIds;
    // aux.splice(index, 1);
    setSelectRecursosIds(currentSelect => selectRecursosIds.filter((select, i) => i !== index));
  }

  const eliminarNuevaOpcion1 = (index) => {
    // const aux = selectRecursosIds;
    // aux.splice(index, 1);
    setSelectPesonalIds(currentSelect => selectPesonalIds.filter((select, i) => i !== index));
  }

  async function getRequerimientos() {
    try {
      const postData = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/requerimiento/route`,
        postData
      );

      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
      setRequerimientos(data.requerimiento);
    } catch (error) {
      console.error("Error al obtener requerimientos:", error);
    }
  }

  async function getPersonal() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/personalGET/route`
      );
      if (response.ok) {
        const data = await response.json();
        setPersonal(data.personal || []);
      } else {
        console.error("Error al obtener personal");
      }
    } catch (error) {
      console.error("Error al obtener personal:", error);
    }
  }

  async function getRecurso() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/inventario/route`
      );
      if (response.ok) {
        const data = await response.json();
        setRecurso(data.recurso || []);
      } else {
        console.error("Error al obtener recursos");
      }
    } catch (error) {
      console.error("Error al obtener recursos:", error);
    }
  }

  useEffect(() => {
    getRequerimientos();
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      getRecurso();
    }
  }, [modalIsOpen]);

  useEffect(() => {
    if (modalIsOpen) {
      getPersonal();
    }
  }, [modalIsOpen]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };



  const Asignar = async (requerimientosID) => {
    console.log("user", requerimientosID);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/asignacionPOST/route`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requerimientoId: requerimientosID,
            personalIds: [selectedPersonal1],
            recursosIds: [selectedRecurso1],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Asignación exitosa:", data);
    } catch (error) {
      console.error("Error al asignar recursos:", error);
    }

    closeModal();
  };

  const asignarRecursos = (requerimientosID) => {
    console.log(`Asignando recursos para la consulta ${requerimientosID}`);
    openModal();
  };

  const toggleConsultaActivas = (consultaId) => {
    setRequerimientoId(consultaId);
    setConsultasActivas((prevConsultasActivas) => {
      if (prevConsultasActivas.includes(consultaId)) {
        return prevConsultasActivas.filter((id) => id !== consultaId);
      } else {
        return [...prevConsultasActivas, consultaId];
      }
    });
  };


  return (

    <div className="">
      <script src="https://cdn.tailwindcss.com"></script>
      <Banner title="Módulo de Producción - Requerimientos"/>
      <div >
        <SideMenuRequerimientos />
      </div>
      <div className="absolute fixed left-80 flex-col justify-end mt-24 space-x-4 fixed left-80 mt-20 top-10 ">
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

        {requerimientos.map((requerimiento) => (
          <div key={requerimiento.ID_Orden_DVenta} className="">
            <button
              onClick={() =>
                toggleConsultaActivas(requerimiento.ID_Orden_DVenta)
              }
              className={`mt-6 mb-2 p-2 bg-orange-300 text-black rounded-md cursor-pointer hover:bg-purple-600 ${consultasActivas.includes(requerimiento.ID_Orden_DVenta)
                  ? "hover:bg-purple-600"
                  : ""
                }`}
            >
              Requerimiento Nº{requerimiento.ID_Orden_DVenta}
            </button>

            {consultasActivas.includes(requerimiento.ID_Orden_DVenta) && (
              <div className="mb-4 p-4 bg-gray-100 rounded-md border border-black">
                <section>
                  <h2>Detalles Requerimiento</h2>
                  {/* Mostrar otros campos específicos relacionados con el ID */}

                  <div class=" mt-4 relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                      <thead class="text-xs text-gray-700 uppercase bg-orange-300 ">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Prenda a Confeccionar
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Información de Envío
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Cantidad de la prenda
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Estatus
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Fecha Orden de Venta
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-white border-b ">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {" "}
                            {requerimiento.Tipo_Prenda}
                          </th>
                          <td class="px-6 py-4">
                            {" "}
                            {requerimiento.Informacion_Envio}
                          </td>
                          <td class="px-6 py-4">
                            {" "}
                            {requerimiento.Cantidad_Prenda}
                          </td>
                          <td class="px-6 py-4">{requerimiento.Estatus}</td>
                          <td class="px-6 py-4">{requerimiento.Fecha}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button
                    onClick={() =>
                      asignarRecursos(requerimiento.ID_Orden_DVenta)
                    }
                    className="mr-4 mt-4  rounded-lg p-2 bg-purple-600 text-white cursor-pointer hover:bg-purple-600"
                  >
                    Asignación de Recursos
                  </button>

                  {/* Botón Update */}
                  <button className="mr-4 mt-4 rounded-lg p-2 bg-purple-600 text-white  cursor-pointer hover:bg-purple-600">
                    Actualizar
                  </button>
                </section>
              </div>
            )}
          </div>
        ))}
      </div>





      {/* Ventana Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Asignar Recursos Modal"
        className="Modal mt-24 max-w-2xl mx-auto p-4 bg-white rounded-md shadow-md"
        overlayClassName="Overlay fixed top-0 left-0 w-full h-full opacity-90"
      >
        <h2 className="text-lg font-bold mb-4">Asignar Recursos</h2>

        {/* Primer Selector de opciones */}
        <h3>Asignar personal para la confección</h3>

             <div style={{ display: "flex", flexDirection : 'column',  }}>
          <div  style={{background : ""}}  >
             <button className="mr-4 p-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-600" onClick={() =>
                agregarNuevaOpcion1()
              } >Agregar</button>
          </div>
          <div >
          {selectPesonalIds.map((select, index) => (
            selectPesonalIds.length ? (
             <div key={index}>
              <select
          value={selectedPersonal1}
          onChange={(e) => setSelectedPersonal1(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="" disabled>
            Selecciona un recurso
          </option>
          {Personal.map((personal, index) => (
            <option key={index} value={personal.ID_Personal}>
              {personal.Nombre_Completo} - status: {personal.ID_Personal}
            </option>
          ))}
        </select>
              <button className="mr-4 p-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-600" onClick={() => eliminarNuevaOpcion1(index)}>Eliminar</button>
             </div>
            ) : null
          ))}
          </div>
        </div>



        {/* <select
          value={selectedPersonal1}
          onChange={(e) => setSelectedPersonal1(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="" disabled>
            Selecciona el personal
          </option>
          {Personal.map((personal, index) => (
            <option key={index} value={personal.ID_Personal}>
              {personal.Nombre_Completo} - Estatus: {personal.ID_Personal}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
        {/* Segundo Selector de opciones */}
        {/* <select
          value={selectedPersonal2}
          onChange={(e) => setSelectedPersonal2(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="" disabled>
            Selecciona un recurso
          </option>
          {Personal.map((personal, index) => (
            <option key={index} value={personal.ID_Personal}>
              {personal.Nombre_Completo} - Estatus: {personal.Estatus}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>  */}

        {/* <div style={{ display: "flex", flexDirection : 'column' }}>
          <div>
            <h1> ESTE ES UNA PRUEBA</h1>
          </div>
          <div  style={{background : "red"}}  >
             <button onClick={() =>
                agregarNuevaOpcion()
              } >AGREGAR</button>
          </div>
          <div >
          {selectRecursosIds.map((select, index) => (
            selectRecursosIds.length ? (
             <div key={index}>
              NUEVO SELECT
              <select
          value={selectedRecurso2}
          onChange={(e) => setSelectedRecurso2(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="" disabled>
            Selecciona un recurso
          </option>
          {Recurso.map((recurso, index) => (
            <option key={index} value={recurso.ID_Inventario}>
              {recurso.Nombre} - Stock: {recurso.Cantidad_Stock}
            </option>
          ))}
        </select>
              <button onClick={() => eliminarNuevaOpcion(index)}>ELIMINAR</button>
             </div>
            ) : null
          ))}
          </div>
        </div> */}

        <h3>Asignar recursos</h3>

        <div style={{ display: "flex", flexDirection : 'column',  }}>
          <div  style={{background : ""}}  >
             <button className="mr-4 p-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-600" onClick={() =>
                agregarNuevaOpcion()
              } >Agregar</button>
          </div>
          <div >
          {selectRecursosIds.map((select, index) => (
            selectRecursosIds.length ? (
             <div key={index}>
              <select
          value={selectedRecurso1}
          onChange={(e) => setSelectedRecurso1(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="" disabled>
            Selecciona un recurso
          </option>
          {Recurso.map((recurso, index) => (
            <option key={index} value={recurso.ID_Inventario}>
              {recurso.Nombre} - Stock: {recurso.Cantidad_Stock}
            </option>
          ))}
        </select>
              <button className="mr-4 p-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-600" onClick={() => eliminarNuevaOpcion(index)}>Eliminar</button>
             </div>
            ) : null
          ))}
          </div>
        </div>



        <br></br>
        {/* <select
          value={selectedRecurso1}
          onChange={(e) => setSelectedRecurso1(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="" disabled>
            Selecciona un recurso
          </option>
          {Recurso.map((Recurso, index) => (
            <option key={index} value={recurso.ID_Inventario}>
              {recurso.Nombre} - Stock: {recurso.Cantidad_Stock}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
        <select
          value={selectedRecurso2}
          onChange={(e) => setSelectedRecurso2(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="" disabled>
            Selecciona un recurso
          </option>
          {Recurso.map((recurso, index) => (
            <option key={index} value={recurso.ID_Inventario}>
              {recurso.Nombre} - Stock: {recurso.Cantidad_Stock}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
        <select
          value={selectedRecurso3}
          onChange={(e) => setSelectedRecurso3(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="" disabled>
            Selecciona un recurso
          </option>
          {Recurso.map((recurso, index) => (
            <option key={index} value={recurso.ID_Inventario}>
              {recurso.Nombre} - Stock: {recurso.Cantidad_Stock}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
        <select
          value={selectedRecurso4}
          onChange={(e) => setSelectedRecurso4(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="" disabled>
            Selecciona un recurso
          </option>
          {Recurso.map((recurso, index) => (
            <option key={index} value={recurso.ID_Inventario}>
              {recurso.Nombre} - Stock: {recurso.Cantidad_Stock}
            </option>
          ))}
        </select> */}

        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="mr-4 ml-2 p-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-600"
          >
            Cancelar
          </button>
            {/* <button
            onClick={closeModal}
            className="mr-4 ml-2 p-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-600"
          >
            AGREGAR TEST
          </button>   */}
          <button
            onClick={() => {
              Asignar(requerimientoId)
            }}
            className="mr-4 p-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-600"
          >
            Asignar
          </button>
        </div>
      </Modal>
    </div>

  );
};

export default Requerimientos;
