const whereAmI = () => {
  const homeLink = document.getElementsByClassName('homeLink')[0];
  const aboutLink = document.getElementsByClassName('aboutLink')[0];
  const projectsLink = document.getElementsByClassName('projectsLink')[0];
  const contactLink = document.getElementsByClassName('contactLink')[0];
  homeLink.classList.add('selected');
  aboutLink.classList.remove('selected');
  projectsLink.classList.remove('selected');
  contactLink.classList.remove('selected');
};

export default whereAmI;
