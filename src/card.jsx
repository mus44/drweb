import { useState } from "react";
import Button from "./button";
import Favorites from "./favorites";
import Remove from "./remove";


const Card = (props) => {
    const {
        origin,
        name,
        image,
        description
    } = props;

    const [result, setResult] = useState(null)

    const addToFavorite = () => {
        fetch("https://api.thecatapi.com/v1/favourites", {
            method: 'POST',
            headers: {
                'x-api-key': '8be9cbd1-5ac7-4cab-948e-c665216373e2',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image_id: image?.id,
            })
        })
            .then(res => res.json())
            .then(data => setResult(data))
            
    }


    return <>
        <li className="card">
            <img
                src={image?.url}
                alt={description}
            />
            <h3>
                {name}
            </h3>
            <h5>{origin}</h5>
            <p>{description}</p>
            <Button onClick={addToFavorite} /> 
            
        </li>
    </>
}

export default Card;