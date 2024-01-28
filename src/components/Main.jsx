import { mashine } from "../constants/MashineData"
import { TattooMashine } from "./TattooMashine"


export const Main = () => {
    return (
        <main>
            <h3 style={{textAlign: 'center',marginBottom: '40px'}}>
                My tattoo mashiene Shop
            </h3>

            <div className="tattoo-list">
                {
                    mashine.map(tattoo => {
                        return(<TattooMashine key={tattoo.model} mashine={tattoo}/>)
                    })
                }
            </div>
        </main>    
    )
}