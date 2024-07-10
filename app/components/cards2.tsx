import Card2 from "./card2";
import {card2data} from '../lib/placeholder-data';

export default  function Cards2(){

    return (
        <>
            <div className='lg:flex  px-5  justify-between gap-5  max-w-6xl mx-auto pt-10 '>
                {card2data.map((card2data, index)=>(
                        <Card2 key={index} card2data={card2data}/>
                ))}
            </div>
        </>
    );
}