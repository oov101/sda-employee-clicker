var nsg = require('node-sprite-generator');

nsg({
    src: [
        'src/assets/sprites/**/*.png'
    ],
    compositor: 'jimp',
    stylesheet: 'css',
    spritePath: 'public/assets/atlas.png',
    stylesheetPath: 'public/styles/atlas.css',
}, function (err) {
    console.log('Sprite generated!');
});
