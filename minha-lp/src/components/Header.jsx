import './style.css';

function Header() {
    return (
        <header 
            className="py-5"
            style={{
                backgroundColor: 'black',
                color: '#fff',
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <img 
                            src="/src/assets/foto_perfil.jpg"
                            alt="Foto de perfil" 
                            className="profile-img img-fluid rounded-circle shadow animate__animated animate__fadeInLeft" 
                            style={{ maxWidth: '320px' }}
                        />
                    </div>

                    <div className="col-md-8 text-md-start text-center">
                        <h1 className="display-2 fw-bold animate__animated animate__fadeInDown">Philippe Dahan Santos</h1>
                        <p className="display-3 lead fs-2 animate__animated animate__fadeInDown">Desenvolvedor Full Stack</p>
                    </div>
                </div>
            </div>
        </header>
      );
}


export default Header;