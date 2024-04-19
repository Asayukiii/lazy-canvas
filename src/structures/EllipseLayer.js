'use strict';

const BaseLayer = require('./BaseLayer');
const { isValidColor } = require('../utils');

class EllipseLayer extends BaseLayer {
        
            constructor(data = {}) {
                super(data);
                this.data.type = 'ellipse';
            }
    
            /**
             * @param {number} width - The width of the figure
             */
            setWidth(width) {
                if (!width) throw new Error('Width must be provided');
                if (isNaN(width)) throw new Error('Width must be a number');
                this.data.width = width;
                return this;
            }
    
            /**
             * @param {number} height - The height of the figure 
             */
            setHeight(height) {
                if (!height) throw new Error('Height must be provided');
                if (isNaN(height)) throw new Error('Height must be a number');
                this.data.height = height;
                return this;
            }
    
            /**
             * @param {boolean} fill - Whether the figure should be filled or not
             */
            setFilled(fill) {
                if (!fill) throw new Error('Fill must be provided');
                if (typeof fill !== 'boolean') throw new Error('Fill must be a true or false value');
                this.data.fill = fill;
                return this;
            }
    
            /**
             * @param {number} stroke - The stroke of the figure
             */
            setStroke(stroke) {
                if (!stroke) throw new Error('Stroke must be provided');
                if (isNaN(stroke)) throw new Error('Stroke must be a number');
                this.data.stroke = stroke;
                return this;
            }
    
            /**
             * @param {hex} color - The color of the figure 
             */
            setColor(color) {
                if (!color) throw new Error('Color must be provided');
                if (isValidColor(color) == false) throw new Error('Color must be a valid color');
                this.data.color = color;
                return this;
            }

            /**
             * @param {number} radius - The radius of the figure
             */
            setRadius(radius) {
                if (!radius) throw new Error('Radius must be provided');
                if (isNaN(radius)) throw new Error('Radius must be a number');
                this.data.radius = radius;
                return this;
            }
    
    }

module.exports = EllipseLayer;