import { useState, useEffect, useId } from 'react';
import Card from './card'

const Favorites = () => {

    const [favourites, setFavourites] = useState(null);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/favourites", {
            headers: { 'x-api-key': '8be9cbd1-5ac7-4cab-948e-c665216373e2 ' }
        })
            .then(res => res.json())
            .then(data => setFavourites(data))
    }, )

    return <>
        <h1 class="header">Favorites</h1>

        <div className='card-wrapper'>
            {
                favourites?.map(fav => <Card key={fav.id} {...fav} />)
            }


        </div></>
}

export default Favorites