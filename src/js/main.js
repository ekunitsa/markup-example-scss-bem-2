// only for develop. Needed for twig watcher:
if (process.env.NODE_ENV === 'development') {
    require('../index.twig');
}

// Utils
import './utils/avif-webp';
import './utils/grid.min.js';

// Plugins

// global style file
import '../scss/style.scss';

// other scripts
import './components/header';
import './components/menu';
import './components/portfolio';
