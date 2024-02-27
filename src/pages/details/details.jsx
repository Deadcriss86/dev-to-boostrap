import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { CardPost } from "../../components/card-post"



const Details = () => {
    const {id} = useParams()
    const [cardData, setCardData] = useState([]);
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
    
    return(
        <>
        <h1>hola, eres el usuario {id}</h1>
        <div className="">
                {cardData && cardData.filter((user) => user.key === id).map(({ Titulo, Tags, UrlImagen, Descripcion }) => (
                     <CardPost UrlImagen={UrlImagen} Titulo={Titulo} Tags={Tags} Descripcion={Descripcion} />
                ))}
        </div>
        </>
    )
}

export default Details