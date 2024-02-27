import React, { useState, useEffect } from "react";
import { CardPost } from "../card-post";
import { Button } from "bootstrap";
import CreaBoton from "../button/button";


const FetchGet = (props) => {
    const [cardData, setCardData] = useState([]);
    const [search, setSearch] = useState("");

    const searcher = (e) => {
        let letter = e.target.value
        setSearch(letter);
    }

    useEffect(() => {
        const getAllData = async () => {
            const response = await fetch('https://firstdatabase-c5db5-default-rtdb.firebaseio.com/post.json');
            const data = await response.json();
            const formattedData = Object.keys(data).map(key => ({ key, ...data[key] }));
            setCardData(formattedData);
            //refreshFilter();
            
        }

        getAllData();
    }, []);

    // Filtrar los datos cuando la búsqueda cambia
    const results = !search ? cardData : cardData.filter((item) => item.Titulo.toLowerCase().includes(search.toLowerCase()));


    return (
        <>
            <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control' />
            <div className="">
                {cardData && [...results].reverse().map(({ Titulo, Tags, UrlImagen, key }) => (
                     <div key={key}>
                     <CardPost UrlImagen={UrlImagen} Titulo={Titulo} Tags={Tags} />
                     <CreaBoton path={`/details/${key}`} title="ver mas..." />
                 </div>
                ))}
            </div>
        </>
    );
}

export default FetchGet;
