const whereAmI = (page) => {
  const homeLink = document.getElementsByClassName('homeLink')[0];
  const aboutLink = document.getElementsByClassName('aboutLink')[0];
  const projectsLink = document.getElementsByClassName('projectsLink')[0];
  const contactLink = document.getElementsByClassName('contactLink')[0];

  switch (page) {
  case 'home':
    homeLink.classList.add('selected');
    aboutLink.classList.remove('selected');
    projectsLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    break;
  case 'about':
    aboutLink.classList.add('selected');
    homeLink.classList.remove('selected');
    projectsLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    break;
  case 'projects':
    projectsLink.classList.add('selected');
    aboutLink.classList.remove('selected');
    homeLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    break;
  case 'contact':
    contactLink.classList.add('selected');
    aboutLink.classList.remove('selected');
    projectsLink.classList.remove('selected');
    homeLink.classList.remove('selected');
    break;
  default:
    contactLink.classList.remove('selected');
    aboutLink.classList.remove('selected');
    projectsLink.classList.remove('selected');
    homeLink.classList.remove('selected');
  }
};

export default whereAmI;
