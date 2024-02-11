import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
      <div className="row">
        <div className="col">
          <h4>{fugitive.title}</h4>
        </div>
        <div className="col">
          <img src={fugitive.images[0].large} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Sexo: {fugitive.sex}</h6>
          <h6>Edad: {fugitive.age}</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{fugitive.details}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
