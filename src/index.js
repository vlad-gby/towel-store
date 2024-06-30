import './css-reset-meyer.css';
import './style.css';
import '../node_modules/boxicons/css/boxicons.min.css';
import * as components from './components.js';



components.renderHeader();
components.renderBigImg();
components.renderOfferSection();

components.renderCard('offers', 1, 'Ember Glow', 'Richly colored towel with a warm feel', 1500, 1200);
components.renderCard('offers', 2, 'Cloud Kiss Towel', 'Super soft and fluffy towel for ultimate comfort', 1500, 1200);
components.renderContactSection();
components.renderCard('offers', 3, 'Cloud Kiss Towel', 'Super soft and fluffy towel for ultimate comfort', 1500, 1200);

// components.removeByClass('sect-cards');










