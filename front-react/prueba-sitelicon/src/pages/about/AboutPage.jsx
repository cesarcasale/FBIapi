import React from 'react'
import Footer from '../../components/Footer/Footer'

const AboutPage = () => {
  return (  <div className='container'>
      <div className='row'>
        <div className='col py-5'>
          <p className=' text-center'>
            En principio, opté por hacer el proyecto únicamente con HTML, CSS y JavaScript, 
            con el objetivo de resaltar mis conocimientos como programador, 
            independientemente de la tecnología utilizada. Pero luego, despues de considerar las ventajas de demostrar 
            mi experiencia con una tecnología más avanzada, decidí implementarlo con React.
            Escogí React por su versatilidad y eficiencia. 
            Además, pense que podia demostrar mi capacidad para adaptarme rápidamente a nuevas herramientas sería un 
            valor agregado importante.
            Durante el proceso me enfrenté a un desafío, al trabajar con la API para 
            la sección de detalles del fugitivo. En un momento, me encontré con un mensaje en la consola que 
            indicaba que se habían realizado demasiados renderizados y que ya no era posible acceder a más 
            información. Con lo que tuve que hacer esa parte un poco a ciegas.
            Me causa ilusion tener la oportunidad de colaborar con Sitelicon y contribuir con mis habilidades y 
            conocimientos al equipo. Creo en el valor de la práctica profesional como una plataforma para el 
            crecimiento y el aprendizaje continuo, y estoy preparado para formarme como un profesional en el sector.
            Mi objetivo es aprovechar al máximo esta experiencia para expandir mis habilidades y conocimientos, 
            mientras contribuyo de manera significativa al equipo. Estoy comprometido a trabajar, 
            aprender de los desafíos que surjan y adaptarme rápidamente a las necesidades del proyecto y del equipo.
            Estoy seguro de que esta oportunidad me brindará la plataforma perfecta para desarrollarme como 
            profesional en el sector, y a contribuir con el éxito de la empresa mientras avanzo en mi carrera. 
            Espero poder colaborar con ustedes y alcanzar los objetivos comunes
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>

  )
}

export default AboutPage