function Contato() {
    return (
      <section className="mb-5">
        <h2 className="h4 mb-3 animate__animated animate__fadeInDown animate__delay-1s">Contato</h2>
        <p className="animate__animated animate__fadeInDown animate__delay-1s">
          Você pode entrar em contato comigo pelas vias abaixo:
        </p>
        <ul className="list-inline animate__animated animate__fadeInUp animate__delay-2s">
          <li className="list-inline-item me-3">
            <a href="mailto:philippedsantos@hotmail.com" className="btn btn-outline-primary">
              Email
            </a>
          </li>
          <li className="list-inline-item me-3">
            <a href="https://github.com/Manihuts" target="_blank" rel="noreferrer" className="btn btn-outline-dark">
              GitHub
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/philippe-dahan-santos-386257205/" target="_blank" rel="noreferrer" className="btn btn-outline-info">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    );
  }
  
  export default Contato;
  