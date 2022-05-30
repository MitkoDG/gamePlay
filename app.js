import page from './node_modules/page/page.mjs';

import { addRender } from './src/middlewares/render.js';
import { homePage } from './src/views/home.js';

page(addRender);

page('/', homePage);
page('/catalog', () => console.log('catalog page'));
page('/login', () => console.log('login page'));
page('/create', () => console.log('creat page'));
page('/register', () => console.log('register page'));

page.start();