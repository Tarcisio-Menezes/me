const whereAmI = (page) => {
  window.navigator.vibrate(100);
  const homeLink = document.getElementsByClassName('homeLink')[0];
  const aboutLink = document.getElementsByClassName('aboutLink')[0];
  const curiositiesLink = document.getElementsByClassName('curiositiesLink')[0];
  const contactLink = document.getElementsByClassName('contactLink')[0];
  const ideasLink = document.getElementsByClassName('ideasLink')[0];

  switch (page) {
  case 'home':
    homeLink.classList.add('selected');
    aboutLink.classList.remove('selected');
    curiositiesLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    ideasLink.classList.remove('selected');
    break;
  case 'about':
    aboutLink.classList.add('selected');
    homeLink.classList.remove('selected');
    curiositiesLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    ideasLink.classList.remove('selected');
    break;
  case 'curiosities':
    curiositiesLink.classList.add('selected');
    aboutLink.classList.remove('selected');
    homeLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    ideasLink.classList.remove('selected');
    break;
  case 'contact':
    contactLink.classList.add('selected');
    aboutLink.classList.remove('selected');
    curiositiesLink.classList.remove('selected');
    homeLink.classList.remove('selected');
    ideasLink.classList.remove('selected');
    break;
    case 'ideas':
      ideasLink.classList.add('selected');
      contactLink.classList.remove('selected');
      aboutLink.classList.remove('selected');
      curiositiesLink.classList.remove('selected');
      homeLink.classList.remove('selected');
      break;
  default:
    contactLink.classList.remove('selected');
    aboutLink.classList.remove('selected');
    curiositiesLink.classList.remove('selected');
    ideasLink.classList.remove('selected');
    homeLink.classList.remove('selected');
  }
};

export default whereAmI;
