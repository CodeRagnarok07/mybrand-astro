
import fetching from "@/content/query/skills.js";
import React, { useEffect, useState } from "react";

const data = await fetching()

export default function MyApp() {

    useEffect(() => {
        console.log("cliente");
    }, [1]);
  
    return (
        <div className="flex flex-col">

            <h1>hola mundo</h1>
        
   
            {/* {console.log(data)} */}

            {data.map((v,k)=>(
                <div>
                    <img src={v.icon} alt="" />
                </div>
            ))}
           


        </div>


    )
}