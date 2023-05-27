import { initialPageLoad } from './initial-page-load';
import { homeTab } from './home-tab';
import { menuTab } from './menu-tab';
import { contactTab } from './contact-tab';
import './style.css';

start();

function addButtonClicks() {
    const homeBtn = document.getElementById('home')
    const menuBtn = document.getElementById('menu')
    const contactBtn = document.getElementById('contact')

    homeBtn.addEventListener('click', homeTab)
    menuBtn.addEventListener('click', menuTab)
    contactBtn.addEventListener('click', contactTab)
}

function start() {
    initialPageLoad();
    homeTab();
    addButtonClicks();
}
