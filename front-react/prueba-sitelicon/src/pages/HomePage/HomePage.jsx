import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import Gallery from '../../components/gallery/Gallery';
import Pagination from '../../components/Pagination/Pagimation';
import Buscador from '../../components/Buscador/Buscador';
import Footer from '../../components/Footer/Footer';
import { AppContext } from '../../shared/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


export default function CharactersPage() {
    const [characters, setCharacters] = useState([]);
    const [charactersFiltered, setCharactersFiltered] = useState([]);
    const { search } = useContext(AppContext);
    // const {gender, setGender} = useState("");
    // &sex=${gender}
    const getCharacters = async (newPage) => {
        try {
            const response = await axios.get(`https://api.fbi.gov/wanted/v1/list?page=${newPage}`);
            if (response.status !== 200) {
                throw new Error('Error al obtener los datos');
            }
            const { data } = response;
            const results = data.items;
            console.log(results);
            setCharacters(results);
            setCharactersFiltered(results);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    // , gender
    useEffect(() => {
        getCharacters(1);
    }, [search]);
    const searchCharacters = (name) => {
        const filtered = characters.filter((character) =>
            character.name.toLowerCase().includes(name.toLowerCase())
        );
        setCharactersFiltered(filtered);
    };
    return <div className='character-page'>
        {/* <select className="form-select" onChange={(event) => setGender(event.target.value)}>
            <option selected>Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select> */}
        <Gallery data={charactersFiltered} />
        <Pagination onChangePage={getCharacters} />
        <Footer></Footer>
    </div>
}


