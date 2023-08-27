import React, { useState }  from 'react'
import {

  useQuery,
} from '@tanstack/react-query'
// import { Link } from 'react-router-dom';



const getComunity = () => {
  return fetch('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ComunidadesAutonomas'  )
  .then((res) => res.json())

}

const getData = () => {

    return fetch('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/194')
    .then((res) => res.json())
}

const getProvinces = (comunity) => {

  return fetch('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/'+comunity)
  .then((res) => res.json())
}




export function Comunitys() {
  let [comunity, setComunity] = useState('');
console.log ('comunitys', comunity)
  let handleComunityChange = (e) => {
    setComunity(e.target.value);
   }
   

const { isLoading, error, data } = useQuery({
  queryKey: ['comunitys'],
  queryFn: getComunity
         
})
if (isLoading) return 'Cargando...'

if (error) return 'Ocurrio un error: ' + error.message



return (

    
      <select onChange={handleComunityChange}>
      <option value="">Selecciona una Comunidad Autonoma</option>
              { data.map((comun) => (
      
                <option key={comun.IDCCAA} value={comun.IDCCAA}>{comun.CCAA}</option>
        

          ))}
      </select>


)


}




export function Provinces(props) {
  const comunity = props.comunity;
console.log(comunity)

  const { isLoading, error, data } = useQuery({
    queryKey: ['provinces'],
    queryFn: getProvinces
  })

  if (isLoading) return 'Cargando...'
  
  if (error) return 'Ocurrio un error: ' + error.message


return (
  <select>
  { data.map((prov) => (
      
    <option key={prov.IDPovincia} value={prov.IDPovincia}>{prov.Provincia}</option>


))}

</select>

)

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

          <p>Gasolineras de Catral Ejemplo</p>

        { data.ListaEESSPrecio.map((fuel) => (
            <div key={fuel.IDEESS} >
            <li>{fuel.Rótulo}</li>
            </div>
          ))}
       </div>
   
    )
      

}