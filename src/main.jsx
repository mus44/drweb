import React, {useEffect, useState} from "react";
import Card from './card'

const Main = () => {
    const url = "https://api.thecatapi.com/v1/breeds";
    // const [state, setState] = useState(null); -- 
    const [breeds, setBreeds] = useState(null);

    useEffect(() => {
        fetch(url, {
            headers: { 'x-api-key': '8be9cbd1-5ac7-4cab-948e-c665216373e2' }
        })
            .then(res => res.json())
            .then(data => setBreeds(data))
    }, )


    return (
        <>
            <div div className="container">
                <ul className="card-wrapper">
                    {
                        breeds?.map(breed => <>
                            <Card {...breed} />
                        </>
                        )
                    }
                </ul>

            </div>
        </>
    )
}
export default Main;