import React, { useState, useEffect } from "react";
import { CardPost } from "../card-post";

const FetchGet = (props) => {
    const [cardData, setCardData] = useState(null);
    const [search, setSearch] = useState("");

    const searcher = (e) => {
        setSearch(e.target.value);
        refreshFilter();
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
    const refreshFilter=() => {
      const results = !search ? cardData : cardData.filter(dato => dato.Title.toLowerCase().includes(search.toLowerCase()));
        setCardData(results);
    }

    return (
        <>
            <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control' />
            <div className="">
                {cardData && cardData.map(({ Titulo, Tags, UrlImagen, key }) => (
                    <CardPost key={key} UrlImagen={UrlImagen} Titulo={Titulo} Tags={Tags}></CardPost>
                ))}
            </div>
        </>
    );
}

export default FetchGet;
