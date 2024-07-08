import card1 from './img/card1.jpg';
import card2 from './img/card2.jpg';
import card3 from './img/card3.jpg';
import card4 from './img/card4.jpg';
import card5 from './img/card5.jpg';
import card6 from './img/card6.jpg';
import pillows from './img/pillows.jpg';
import arrowLeft from './img/arrow-left.png';
import arrowRight from './img/arrow-right.png';
import cat from './img/cat.png';
import logo from './img/logo.png';


function newTag(name, className, content){
  const el = document.createElement(name);
  if(className){
    el.classList.add(...className.split(' '));
  }
  if(content){
    el.textContent = content;
  }
  return el;
}
function newIcon(name){
  const icon = newTag('i', 'icon');
  icon.classList.add('bx', ...name.split(' '));
  // addClasses(icon, name);
  return icon;
}
function append(parent, ...children){
  children.forEach(el => {
    parent.appendChild(el);
  });
}

function capitalize(text){
  text = text.split('');
  text[0] = text[0].toUpperCase();
  return text.join('');
}

function removeByClass(className){
  const el = document.querySelector(`.${className}`);
  if(el){
    el.remove();
  } else{
    console.log('Non-existent class');
  }
}

function clearSections(){
  const sections = document.querySelectorAll('body section');
  sections.forEach(section => {
    section.remove();
  });
}

function getMain(){
  return document.querySelector('main')
}



export function renderStructure(){
  function newTab(name, iconName, action){
    const tab = newTag('a', 'tab');
    const icon = newIcon(iconName);
    const h2 = newTag('h2', 'tab-name', name);
    append(tab, icon, h2);

    tab.addEventListener('click', e => {
      clearSections();
      action();
    });
    return tab;
  }
  
  const header = newTag('header');
  const logoBox = newTag('a', 'logo-block');
  logoBox.setAttribute('href', '#');
  const tabs = newTag('div', 'tabs');
  
  const logoImg = newTag('img', 'logo-img');
  logoImg.src = logo;
  const logoText = newTag('div', 'logo-text', 'Feya Shop');
  append(logoBox, logoImg, logoText);

  logoBox.addEventListener('click', e => {
    clearSections();
    renderHome();
  });

  const homeTab = newTab('Home', 'bx-home', renderHome);
  const storeTab = newTab('Store', 'bx-store-alt', renderStore);
  const aboutTab = newTab('About us', 'bx-info-circle', renderAbout);
  const mailTab = newTab('Contact us', 'bx-envelope', renderContact);
  append(tabs, homeTab, storeTab, aboutTab, mailTab);

  append(header, logoBox, tabs);

  const main = newTag('main');
  const footer = newTag('footer');
  append(document.body, header, main, footer);

  const text = newTag('h1', 'text', 'The beauty of my mock-page is made through the lens of talented photographers: ');
  const contributors = newTag('div', 'contributors');

  append(footer, text, contributors);
  function newAuthorUnsplash(name, nameLink, photoLink){
    const author = newTag('h2', 'contributor', ' on ');

    const nameL = newTag('a', 'name-link', name);
    nameL.setAttribute('href', nameLink);
    nameL.setAttribute('target', '_blank');
    author.prepend(nameL);

    const photoL = newTag('a', 'photo-link', 'Unsplash');
    photoL.setAttribute('href', photoLink);
    photoL.setAttribute('target', '_blank');
    author.appendChild(photoL);

    document.querySelector('.contributors').appendChild(author);
  }
  function newAuthor(name, nameLink){
    const author = newTag('h2', 'contributor');

    const nameL = newTag('a', 'name-link', name);
    nameL.setAttribute('href', nameLink);
    nameL.setAttribute('target', '_blank');
    author.prepend(nameL);

    document.querySelector('.contributors').appendChild(author);
  }

  newAuthorUnsplash('Joyful', `https://unsplash.com/@joyfulcaptures?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`, `https://unsplash.com/photos/brown-bottle-on-white-towel-XMoXo0vYOeg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`);
  newAuthorUnsplash('Thom Bradley', `https://unsplash.com/@thombradley?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`, `https://unsplash.com/photos/white-and-gray-bed-pillow-7FE2UTxR1Yw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`);
  newAuthorUnsplash('Agata Create', `https://unsplash.com/@agatacreate?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`, `https://unsplash.com/photos/three-assorted-color-pillows-fQ2XuWjSzfE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`);
  newAuthorUnsplash('Sven Mieke', `https://unsplash.com/@sxoxm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`, `https://unsplash.com/photos/folded-towels-near-potted-plants-BB3dR-N5Npg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`);
  newAuthor('Marina Orlova', `https://www.pexels.com/@orlovamaria/`);
  newAuthor('Samantha Passuello', `https://www.pexels.com/photo/person-s-hand-inside-pocket-306739/`);
  newAuthor('Taryn Elliott', `https://www.pexels.com/photo/person-wearing-gray-and-white-socks-near-brown-fireplace-4231477/`);

}

export function renderHome(){
  renderBigImgSection();
  renderOfferSection();

  renderCard('offers', 2, 'Ember Glow', 'Richly colored towel with a warm feel', 1500, 1200);
  renderCard('offers', 3, 'Cloud Kiss Towel', 'Super soft and fluffy towel for ultimate comfort', 1500, 1200);
  renderContactSection();
  renderCard('offers', 4, 'Cloud Kiss Towel', 'Super soft and fluffy towel for ultimate comfort', 1500, 1200);
}
export function renderStore(){
  renderProductsSection();
}
export function renderContact(){
  renderContactSection();
}
export function renderAbout(){
  renderAboutSection();
  renderContactSection();
}

function renderBigImgSection(){
  const section = newTag('section', 'sect-img');

  const bigImg = newTag('img', 'big-img');
  bigImg.src = cat;
  
  const textBlock = newTag('div', 'text-block');
  const orderBtn = newTag('button', 'order-now', 'ORDER');
  const text = newTag('p', 'text', 'Cosiness for your home❤️');
  append(textBlock, orderBtn, text);

  append(section, bigImg, textBlock);
  getMain().appendChild(section);
}

function renderOfferSection(){
  const section = newTag('section', 'sect-cards');
  const text = newTag('p', 'text', 'To-day');

  const offers = newTag('div', 'offers');

  append(section, text, offers);
  getMain().appendChild(section);
}

function renderCard(where, imageNum, mainText, secondaryText, prevPrice, currPrice){
  const img = [card1, card2, card3, card4, card5, card6];
  
  const card = newTag('div', 'card');

  const image = newTag('div', 'image');
  image.style.backgroundImage = `url(${img[imageNum - 1]})`;

  const words = newTag('div', 'words');
  const main = newTag('div', 'main-text', mainText);
  const secondary = newTag('div', 'secondary-text', secondaryText);
  append(words, main, secondary);
  
  const numbers = newTag('div', 'numbers');
  const price = newTag('div', 'price');
  const current = newTag('div', 'current', `${currPrice}₴`);
  const previous = newTag('s', 'previous', `${prevPrice}₴`);
  append(price, current, previous);

  const order = newTag('button', 'order', 'ORDER');
  const icon = newIcon('bx-cart');
  order.appendChild(icon);
  append(numbers, price, order);
  
  const textContent = newTag('div', 'text-content');
  append(textContent, words, numbers);

  append(card, image, textContent);

  if(where === 'offers'){
    const offers = document.querySelector('.offers');
    offers.appendChild(card);
  } else if(where === 'store'){
    const store = document.querySelector('.product-grid');
    store.appendChild(card);
  }
}

function renderContactSection(){
  const section = newTag('section', 'sect-contact');
  const flexWrapper = newTag('div', 'flex-wrapper');
  const text = newTag('p', 'text', 'Contact us');
  const img = newTag('img', 'img');
  img.src = card3;

  const contactBlock = newTag('div', 'contact-block');

  const form = newTag('form', 'form');
  function createField(name){
    const label = newTag('label', `label-${name}`, capitalize(name));
    const input = newTag('input', `input-${name}`);
    label.appendChild(input);
    form.appendChild(label);
    if(name === 'submit'){
      input.setAttribute('type', 'submit');
      input.classList.add('order-now');
    }
  }
  createField('name');
  createField('email');
  createField('message');
  const submitBtn = newTag('button', 'submit', 'Submit');
  form.appendChild(submitBtn);

  const copyInfo = newTag('div', 'copy-info');
  const ourInfo = newTag('div', 'header', 'Address & Contact');
  const phone = newTag('div', 'phone info', '+380123456789');
  const email = newTag('div', 'email info', 'fakemail.mock@gmail.com');
  const address = newTag('div', 'address info', 'Fake Avenue, Metropolis, SU');
  append(copyInfo, ourInfo, phone, email, address);
  
  const beingCopied = [phone, email, address];
  beingCopied.forEach(info => {
    const button = newTag('button', 'copy-button');
    const icon = newIcon('bx-copy icon');
    const clickedIcon = newIcon('bx-check icon');
    button.prepend(icon);
    button.addEventListener('click', e => {
      navigator.clipboard.writeText(button.parentElement.textContent);

      icon.remove();
      button.prepend(clickedIcon);
      button.classList.add('copied');
      setTimeout(() => {
        clickedIcon.remove();
        button.prepend(icon);
        button.classList.remove('copied');
      }, 1000);
    });
    info.prepend(button);
  });

  append(contactBlock, form, copyInfo);
  append(flexWrapper, contactBlock, img);



  append(section, text, flexWrapper);
  getMain().appendChild(section);
}

function renderProductsSection(){
  const section = newTag('section', 'sect-products');

  const text = newTag('p', 'text', 'Store');
  const productGrid = newTag('div', 'product-grid');
  append(section, text, productGrid);
  
  getMain().appendChild(section);
  
  renderCard('store', 1, 'Serene Escape Bundle', 'Breathable blanket combined with supportive pillows for a calming and restful night\'s sleep.', 500, 350);
  renderCard('store', 5, 'Hooded Haven', ' Plush and cozy robe with a hood for extra warmth and relaxation.', 200, 110);
  renderCard('store', 6, 'Cloud Surfer', 'Fluffy and luxurious towel that feels like floating on a cloud.', 20, 13);
  renderCard('store', 2, 'Ember Glow', 'Richly colored towel with a warm feel', 15, 12);
  renderCard('store', 3, 'Cloud Comfort', 'Ultra-soft and plush socks for a luxurious feel on your feet.', 1200, 1100);
  renderCard('store', 4, 'Cloud Kiss Towel', 'Super soft and fluffy towel for ultimate comfort', 500, 200);

}

function renderAboutSection(){
  const section = newTag('section', 'sect-about');

  const text = newTag('p', 'text', 'About');
  const about = newTag('div', 'about-us');
  append(section, text, about);

  const textBlock = newTag('p', 'text-block');
  const p1 = newTag('p', 'p1', `Nestled in the heart of Sumy, a city renowned for its warmth and hospitality, lies Feya Store. We bring that very warmth straight to your doorstep with our collection of premium home essentials.`);
  const p2 = newTag('p', 'p2', `Inspired by Sumy's spirit of comfort and community, we handcraft luxurious blankets, plush towels, supportive pillows, and toasty socks – all designed to create a cozy haven within your own home.`);
  const p3 = newTag('p', 'p3', `Experience the difference of quality Ukrainian craftsmanship. Explore our collection and let the comfort of Sumy embrace you.`);
  append(textBlock, p1, p2, p3);
  const img = newTag('img', 'img');
  img.src = pillows;
  append(about, textBlock, img);

  getMain().appendChild(section);
}










