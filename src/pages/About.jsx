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
            <p className="mt-3">
            Bienvenidos a <span className="fw-bold">Carbón y Leños Burger</span>.
            Somos una empresa dedicada a ofrecer las mejores hamburguesas al carbón,
            sánguches, alitas y salchipapas preparados siempre con ingredientes frescos
            y con la calidad que nos caracteriza.
            </p>
        </div>

        {/* Servicios */}
        <div className="py-5 bg-danger" >
            <div className="container">
            <h2 className="text-center mb-5 text-white fw-bold">🎉 Nuestros Servicios 🎉</h2>
            <div className="row g-4">
                <div className="col-md-4">
                <div className="card h-100 shadow-sm text-center border-0">
                    <div className="card-body">
                    <i className="bi bi-balloon-heart-fill display-4 text-danger"></i>
                    <h5 className="card-title mt-3 text-warning fw-bold">Cumpleaños</h5>
                    <p className="card-text">
                        Reserva mesas para tus celebraciones especiales con nosotros.
                    </p>
                    </div>
                </div>
                </div>

                <div className="col-md-4">
                <div className="card h-100 shadow-sm text-center border-0">
                    <div className="card-body">
                    <i className="bi bi-people-fill display-4 text-primary"></i>
                    <h5 className="card-title mt-3 text-warning fw-bold">Eventos de Empresa</h5>
                    <p className="card-text">
                        Una excelente noche llena de comida para tu equipo de trabajo.
                    </p>
                    </div>
                </div>
                </div>

                <div className="col-md-4">
                <div className="card h-100 shadow-sm text-center border-0">
                    <div className="card-body">
                    <i className="bi bi-bag-check-fill display-4 text-success"></i>
                    <h5 className="card-title mt-3 text-warning fw-bold">Pedidos</h5>
                    <p className="card-text">
                        Para entregas por delivery o pasar retirando por el local. Tambien pedidos ideales para escuelas, colegios y eventos.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Contacto WhatsApp */}
        <div className="container my-5 text-center">
            <h2 className="text-success">📞 Contáctanos</h2>
            <p>
            ¿Quieres reservar para un evento, hacer un pedido grande o simplemente
            hablar con nosotros? Escríbenos por WhatsApp:
            </p>

            <a
            href="https://wa.me/5491122334455?text=Hola!%20Quiero%20más%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg"
            >
            <i className="bi bi-whatsapp"></i> Escríbenos por WhatsApp
            </a>
        </div>
        </div>
    );
}

export default About;
