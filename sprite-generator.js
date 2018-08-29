var nsg = require('node-sprite-generator');

nsg({
    src: [
        'public/assets/sprites/**/*.png'
    ],
    compositor: 'jimp',
    stylesheet: 'css',
    spritePath: 'public/assets/atlas.png',
    stylesheetPath: 'src/styles/css/atlas.css',
}, function (err) {
    console.log('Sprite generated!');
});
