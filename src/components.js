import card1 from './img/card1.jpg';
import card2 from './img/card2.jpg';
import card3 from './img/card3.jpg';
import card4 from './img/card4.jpg';
import card5 from './img/card5.jpg';
import card6 from './img/card6.jpg';
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

  const homeTab = newTab('Головна', 'bx-home');
  const storeTab = newTab('Магазин', 'bx-store-alt');
  const aboutTab = newTab('Про нас', 'bx-info-circle');
  const mailTab = newTab('Напишіть нам', 'bx-envelope');
  append(tabs, homeTab, storeTab, aboutTab, mailTab);

  append(header, logoBox, tabs);
  document.body.appendChild(header);
}

export function renderSectionBigImg(){
  const section = newTag('section', 'sect-img');

  const bigImg = newTag('img', 'big-img');
  bigImg.src = cat;
  
  const textBlock = newTag('div', 'text-block');
  const orderBtn = newTag('button', 'order-now', 'ЗАМОВИТИ');
  const text = newTag('p', 'text', 'Затишок для вашого дому❤️');
  append(textBlock, orderBtn, text);

  append(section, bigImg, textBlock);
  document.body.appendChild(section);
}








