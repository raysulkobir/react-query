import React, {useEffect} from 'react';
import axios from "axios";
import {useQuery} from "react-query";

const First = () => {
   useEffect(() => {
      getUser();
   }, [])


   const query = useQuery('todos', () =>{
      fetch('hhttp://szefyadmin.ra/api/v1/products').then(res =>  res.json();
   })
   async function getUser() {
      try {
         const response = await axios.get('http://szefyadmin.ra/api/v1/products');
         console.log(response);
      } catch (error) {
         console.error(error);
      }
   }

   return (
      <div>
         dd
      </div>
   );
};

export default First;
