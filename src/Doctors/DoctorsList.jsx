import React from 'react'
import DoctorsCard from './DoctorsCard.jsx'
import { BASE_URL } from '../config.js'
import useFetchData from '../hooks/useFetchData.jsx'
import Loader from '../components/Loader/Loading.jsx'
import Error from '../components/Error/Error.jsx'
const DoctorsList = () => {

  const {data:doctors,loading,error} =useFetchData(`${BASE_URL}/doctors`)
  return (
    <>
    {loading && <Loader/>}
    {error && <Error/>}
  {!loading && !error &&  (<div className='grid gridcols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-[30px] lg:mt-[55px]'>
      {doctors.map((doctor,index)=>
       <DoctorsCard key={doctor._id} doctor={doctor}/>)} 
    </div>)}
    </>
  )
}

export default DoctorsList

