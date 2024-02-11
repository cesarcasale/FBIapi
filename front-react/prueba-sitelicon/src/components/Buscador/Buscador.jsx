import React, { useContext } from 'react';
import { AppContext } from '../../shared/AppContext';

const Buscador = () => {
    const {setSearch} = useContext(AppContext);

return (
    <div>
        <input placeholder='Search...' onChange={(ev) => setSearch(ev.target.value)} />
    </div>
)
}

export default Buscador