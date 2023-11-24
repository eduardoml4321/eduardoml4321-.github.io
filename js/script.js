
document.addEventListener('DOMContentLoaded', (event) => {
  
  const inicioLink = document.querySelector('a[href="#inicio"]');
  const descargasLink = document.querySelector('a[href="#descargas"]');
  const seguridadLink = document.querySelector('a[href="#seguridad"]');
  const novedadesLink = document.querySelector('a[href="#novedades"]');
  const soporteLink = document.querySelector('a[href="#soporte"]');
  const registroLink = document.querySelector('a[href="#registro"]');
  const loginBtn = document.querySelector('#loginBtn');

  
  function scrollToSection(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
      }
  }

  
  inicioLink.addEventListener('click', scrollToSection);
  descargasLink.addEventListener('click', scrollToSection);
  seguridadLink.addEventListener('click', scrollToSection);
  novedadesLink.addEventListener('click', scrollToSection);
  soporteLink.addEventListener('click', scrollToSection);
  registroLink.addEventListener('click', scrollToSection);

  
  loginBtn.addEventListener('click', (event) => {
      
      console.log('Iniciar sesión clickeado');
  });
});
