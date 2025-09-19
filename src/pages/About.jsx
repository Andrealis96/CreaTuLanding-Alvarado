import '../App.css';
import { BsWhatsapp, BsInstagram, BsEnvelopeFill, BsGeoAltFill } from "react-icons/bs";

function About() {
    return (
        <div className="about-page">
            {/* Banner */}
            <div className="banner">
                <img
                    src="/images/banner.png"
                    alt="Banner"
                    className="w-100"
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                />
            </div>

            {/* Sección Sobre Nosotros */}
            <div className="container my-5 text-center">
                <span className="logo-text fs-1 text-danger fw-bold">SOBRE NOSOTROS</span>
                <h5 className="mt-3">
                    Bienvenidos a <span className="fw-bold">CARBÓN Y LEÑOS BURGER</span>.
                    Somos una empresa con más de <span className="fw-bold">10 años</span> de experiencia en el mercado, dedicada a ofrecer las mejores <span className="fw-bold">Hamburguesas al carbón, Sánduches, Alitas y Salchipapas</span> preparados siempre con ingredientes frescos
                    y con la calidad que nos caracteriza.
                </h5>
            </div>

            {/* Servicios */}
            <div className="py-5 bg-black">
                <div className="container">
                    <h2 className="text-center mb-5 logo-text">🎉 NUESTROS SERVICIOS 🎉</h2>
                    <div className="row g-4">
                        {/* cumpleaños */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-lg text-center border-0 bg-warning glow-card p-4">
                                <img 
                                    src="/images/cumpleaños.jpg" 
                                    alt="Cumpleaños" 
                                    className="rounded-circle mx-auto mb-1 w-50" 
                                />
                                <h5 className="card-title mt-2 logo-text">CUMPLEAÑOS</h5>
                                <p className="card-text text-black fw-bold">
                                    Reserva mesas para tus celebraciones especiales con nosotros.
                                </p>
                            </div>
                        </div>

                        {/* eventos */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-lg text-center border-0 bg-warning glow-card p-4">
                                <img 
                                    src="/images/eventos.jpg" 
                                    alt="Eventos" 
                                    className="rounded-circle mx-auto mb-1 w-50" 
                                />
                                <h5 className="card-title mt-2 logo-text">EVENTOS DE EMPRESAS</h5>
                                <p className="card-text text-black fw-bold">
                                    Una excelente noche llena de comida para tu equipo de trabajo.
                                </p>
                            </div>
                        </div>

                        {/* pedidos */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-lg text-center border-0 bg-warning glow-card p-4">
                                <img 
                                    src="/images/pedidos.jpg" 
                                    alt="Pedidos" 
                                    className="rounded-circle mx-auto mb-1 w-50" 
                                />
                                <h5 className="card-title mt-2 logo-text">PEDIDOS</h5>
                                <p className="card-text text-black fw-bold">
                                    Para entregas por delivery o pasar retirando por el local. También pedidos ideales para escuelas, colegios y eventos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contacto WhatsApp */}
            <div className="container my-5 text-center">
                <h2 className="text-danger logo-text">CONTÁCTANOS</h2>
                <h5 className='fw-bold'>
                    ¿Quieres reservar para un evento, hacer un pedido o simplemente
                    hablar con nosotros? Escríbenos por WhatsApp:
                </h5>

                <a
                    href="https://wa.me/593963426401?text=Hola!%20Quiero%20más%20información%20sobre%20sus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success fw-bold text-white btn-lg d-flex align-items-center justify-content-center gap-2 mt-3 btn-wp"
                >
                    <BsWhatsapp size={28}/> Escríbenos por WhatsApp
                </a>
            </div>

            {/* Redes Sociales y Correo */}
            <div className="container my-5 text-center">
                <h2 className="text-danger logo-text">SÍGUENOS Y CONTÁCTANOS</h2>
                <h5 className='fw-bold'>También podés encontrarnos en nuestras redes sociales o escribirnos al correo electrónico:</h5>

                <div className="d-flex flex-column align-items-center gap-3 mt-3">
                    {/* Instagram */}
                    <a 
                        href="https://www.instagram.com/carbonylenosburger" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link d-flex align-items-center btn btn-outline-warning fw-bold"
                    >
                        <BsInstagram size={24} className="me-2"/> @carbonylenosburger
                    </a>

                    {/* Gmail */}
                    <a 
                        href="mailto:carbonyleniosburger@gmail.com" 
                        className="social-link d-flex align-items-center btn btn-outline-warning fw-bold"
                    >
                        <BsEnvelopeFill size={24} className="me-2"/> carbonyleniosburger@gmail.com
                    </a>
                </div>
            </div>

            {/* Ubicación */}
            <div className="container my-5 text-center">
                <div className="card shadow-lg border-0 bg-warning p-4">
                    <h3 className='logo-text text-danger mb-3 d-flex align-items-center justify-content-center gap-2'>
                        <BsGeoAltFill size={28}/> UBICADOS
                    </h3>
                    <h5 className='fw-bold mb-0'>
                        Av. Nelson Estupiñán Bass Nº 003 y Ángel Barbissoty, calle transversal del FROZ ME
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default About;
