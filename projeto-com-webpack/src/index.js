const _ = require('lodash')

require('./style.css')
const logoWebpack = require('./webpack.png')

function component() {
    var element = document.createElement('div')
    var text = _.join(['Olá', 'webpack', '!'], ' ')
    element.innerHTML = text

    var image = new Image()
    image.src = logoWebpack
    image.width = 200
    element.appendChild(image)

    return element
}

document.body.appendChild(component())
