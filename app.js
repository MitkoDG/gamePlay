import page from './node_modules/page/page.mjs';

import { addRender } from './src/middlewares/render.js';
import { catalogPage } from './src/views/catalog.js';
import { createPage } from './src/views/create.js';
import { detailsPage } from './src/views/details.js';
import { editPage } from './src/views/edit.js';
import { homePage } from './src/views/home.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';

page(addRender);

page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/create', createPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

page.start();