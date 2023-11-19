import React from 'react'

const Buscador = ({ data, setDataBusca }) => {
    const inputHandler = (e) => {
        const buscarPalabra = e.target.value.toLowerCase();
    
        const resultado = data.filter(
          (pais) =>
            pais.name.common.toLowerCase().includes(buscarPalabra) ||
            pais.translations.spa.common.toLowerCase().includes(buscarPalabra) ||
            pais.region.toLowerCase().includes(buscarPalabra) ||
            pais.name.official.toLowerCase().includes(buscarPalabra)
        );
    
        setDataBusca(resultado);
      };
    
  return (
    <>
    <div className="col-12 col-md-12">
        <input
          type="text"
          name="buscador"
          id="buscador"
          placeholder="Buscar por Pais / Región ..."
          className="form-control mb-3"
          onChange={inputHandler}
        />
      </div>

    </>
  )
}

export default Buscador