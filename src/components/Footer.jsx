import Alert from 'react-bootstrap/Alert';

const Footer = () => {
    return (
        <div>
            <Alert key={'success'} variant={'success'}>
                Deseas conocer mas sobre Sanit Seiya? Haz click en el siguiente {' '}
                <Alert.Link  href="https://saintseiya.fandom.com/es/wiki/Saint_Seiya_(anime)/Lista_de_personajes#Bronze_Saints" target="_blank">enlace.</Alert.Link>
            </Alert>
            <div className='footer'> Pensado con una 🍺 helada - hecho con mucho ☕️ por Alex Araya</div>
            <div className='footer'> Abril 2023</div>

        </div>
    );
};

export default Footer;
