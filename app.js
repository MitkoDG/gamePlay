import page from './node_modules/page/page.mjs';

page('/', () => console.log('home page'));
page('/catalog', () => console.log('catalog page'));
page('/login', () => console.log('login page'));
page('/create', () => console.log('creat page'));
page('/register', () => console.log('register page'));

page.start();