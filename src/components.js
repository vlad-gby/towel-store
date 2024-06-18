import card1 from './img/card1.jpg';
import card2 from './img/card2.jpg';
import card3 from './img/card3.jpg';
import card4 from './img/card4.jpg';
import card5 from './img/card5.jpg';
import card6 from './img/card6.jpg';
import arrowLeft from './img/arrow-left.png';
import arrowRight from './img/arrow-right.png';
import cat from './img/cat.png';
import logo from './img/logo.png';


function newTag(name, className, content){
  const el = document.createElement(name);
  if(className){
    el.classList.add(className);
  }
  if(content){
    el.textContent = content;
  }
  return el;
}
function newIcon(name){
  const icon = newTag('i', 'icon');
  icon.classList.add('bx', name);
  return icon;
}
function newTab(name, iconName){
  const tab = newTag('a', 'tab');
  const icon = newIcon(iconName);
  const h2 = newTag('h2', 'tab-name', name);
  append(tab, icon, h2);
  return tab;
}
function append(parent, ...children){
  children.forEach(el => {
    parent.appendChild(el);
  });
}

export function renderHeader(){
  const header = newTag('header');
  const logoBox = newTag('a', 'logo-block');
  logoBox.setAttribute('href', '#');
  const tabs = newTag('div', 'tabs');
  
  const logoImg = newTag('img', 'logo-img');
  logoImg.src = logo;
  const logoText = newTag('div', 'logo-text', 'Feya Shop');
  append(logoBox, logoImg, logoText);

  const homeTab = newTab('Home', 'bx-home');
  const storeTab = newTab('Store', 'bx-store-alt');
  const aboutTab = newTab('About us', 'bx-info-circle');
  const mailTab = newTab('Contact us', 'bx-envelope');
  append(tabs, homeTab, storeTab, aboutTab, mailTab);

  append(header, logoBox, tabs);
  document.body.appendChild(header);
}

export function renderBigImg(){
  const section = newTag('section', 'sect-img');

  const bigImg = newTag('img', 'big-img');
  bigImg.src = cat;
  
  const textBlock = newTag('div', 'text-block');
  const orderBtn = newTag('button', 'order-now', 'ORDER');
  const text = newTag('p', 'text', 'Cosiness for your home❤️');
  append(textBlock, orderBtn, text);

  append(section, bigImg, textBlock);
  document.body.appendChild(section);
}

export function renderOfferSection(){
  const section = newTag('section', 'sect-cards');
  const text = newTag('p', 'text', 'To-day');

  const offers = newTag('div', 'offers');
  const scroll = newTag('div', 'scroll');
  offers.appendChild(scroll);

  append(section, text, offers);
  document.body.appendChild(section);
}

export function renderCard(imageNum, mainText, secondaryText, prevPrice, currPrice){
  const img = [card1, card2, card3, card4, card5, card6];

  const offers = document.querySelector('.offers');
  
  const card = newTag('div', 'card');

  const image = newTag('div', 'image');
  image.style.backgroundImage = `url(${img[imageNum]})`;

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
  offers.appendChild(card)
}







