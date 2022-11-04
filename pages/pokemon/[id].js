import React from "react";
import {useRouter } from 'next/router'
 const PokemonByIDPage = () => {
    const router = useRouter ();
    console.log(router.query.id);    
    (
        <div>
            <h1>PokemonByIDPage </h1>
        </div>
    )
 }
 
export default PokemonByIDPage;
