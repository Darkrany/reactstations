import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { Link } from 'react-router-dom';


const getData = () => {

    return fetch('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/194')
    .then((res) => res.json())
}


export default function Gasstations() {

    const { isLoading, error, data } = useQuery({
        queryKey: ['gasstations'],
        queryFn: getData
               
      })
      if (isLoading) return 'Cargando...'
    
      if (error) return 'Ocurrio un error: ' + error.message
      

      return(
        <div>
        { data.ListaEESSPrecio.map((fuel) => (
            <div key={fuel.IDEESS} >
            <li>{fuel.Rótulo}</li>
            </div>
          ))}
       </div>
   
    )
      

}