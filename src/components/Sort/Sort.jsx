import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sort() {

    const [num, setNum] = useState(1)

    const pegaNumero = () => {
        var a = Math.floor(Math.random() * 100);
        setNum(a)
    }

    return(
        <div className='text-center'>
            <button onClick={pegaNumero} className="btn btn-secondary">Realizar sorteio</button>
            <div className="p-5">
                <h1>{num}</h1>
            </div>
        </div>
    );
}

export default Sort ;