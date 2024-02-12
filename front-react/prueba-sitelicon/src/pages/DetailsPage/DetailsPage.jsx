import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

const DetailsPage = () => {
  const { id } = useParams();
  const [fugitive, setFugitive] = useState(null);

  useEffect(() => {
    const fetchFugitive = async () => {
      try {
        const response = await axios.get(`https://api.fbi.gov/@wanted-person/${id}`);
        setFugitive(response.data);
      } catch (error) {
        console.error('Error fetching fugitive details:', error);
      }
    };

    fetchFugitive();
  }, [id]);

  if (!fugitive) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col p-0 m-0">
          <img src={fugitive.images[0].large} alt="" />
        </div>
        <div className="col text-start d-flex flex-column justify-content-center align-items-center">
          <h2>{fugitive.title.split('-')[0]}</h2>
          <h4>{fugitive.title.split('-')[1]}</h4>
          <ul>
            <li>
              <h6>Sexo: {fugitive.sex}</h6>
            </li>
            <li>
              <h6>Edad: {fugitive.age_range}</h6>
            </li>
            <li>
              <h6>Hair: {fugitive.hair}</h6>
            </li>
            <li>
              <h6>Eyes: {fugitive.eyes}</h6>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{fugitive.details}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
        {/* <img src={fugitive.images[i].large} alt="" /> */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DetailsPage;
