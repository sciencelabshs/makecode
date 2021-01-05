/// <reference path="../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>


namespace pxt.editor {

  
    export interface FieldProtractorOptions360 extends Blockly.FieldCustomOptions {
        min? : number,
        max? : number,
        precision?: number,
        step? : number,
    }

    export class FieldProtractor360 extends Blockly.FieldSlider implements Blockly.FieldCustom {
        public isFieldCustom_ = true;

        private params: any;

        private circleSVG: SVGElement;
        private pieCircle: SVGCircleElement;
        private reporter: SVGTextElement;

 
        constructor(value_: any, params: FieldProtractorOptions360, opt_validator?: Function) {
            
            super(parseFloat(value_),
                 /*min*/ params.min === undefined ? '0' : params.min,  
                 /*max*/ params.max === undefined ? '360' : params.max , 
                 /*precision*/ params.precision === undefined ? undefined : params.precision, 
                 /*step*/ params.step === undefined ? '15' : params.step, 
                 /*labelText*/ lf("Angle"), 
                 /*validator*/ opt_validator);
            this.params = params;
            
            
        
        }

        createLabelDom_(labelText: string) {
          
            console.log("Field Editor", this)
        
            const labelContainer = document.createElement('div');
            this.circleSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg") as SVGGElement;
            pxsim.svg.hydrate(this.circleSVG, {
                viewBox: "0 0 200 200",
                width: "170"
            });

            labelContainer.appendChild(this.circleSVG);

            const radius = 90;
            const circumference = 3.14 * radius*2;
            const centerViewBox = {x: 100, y: 100}
            const outerCircle = pxsim.svg.child(this.circleSVG, "circle", {
                'stroke-dasharray': circumference, 
                'stroke-dashoffset': '0',
                'cx': centerViewBox.x, 
                'cy': centerViewBox.y, 
                'r': radius, 
                'style': `fill:white;`,
                'stroke': '#a8aaa8', 'stroke-width': '1rem'
            }) as SVGCircleElement;

            this.pieCircle = pxsim.svg.child(this.circleSVG, "circle", 
            {
                'stroke-dasharray': circumference, 
                'stroke-dashoffset': '0',
                'cx': centerViewBox.x, 
                'cy': centerViewBox.y, 
                'r':  radius, 
                'style': `fill:transparent; transition: stroke-dashoffset 0.1s linear;`,
                'stroke': '#f12a21', 
                'transform': `rotate(-90)`,
                'transform-origin': 'center',
                'class': 'pieCircle',
                'stroke-width': '1em'
            }) as SVGCircleElement;

            this.reporter = pxsim.svg.child(this.circleSVG, "text", {
                'x':  centerViewBox.x+10, 'y':  centerViewBox.y,
                'text-anchor': 'middle', 
                'dominant-baseline': 'middle',
                'style': 'font-size: 36px;',
                'class': 'sim-text inverted number'
            }) as SVGTextElement;

            // labelContainer.setAttribute('class', 'blocklyFieldSliderLabel');
            const readout = document.createElement('span');
            readout.setAttribute('class', 'blocklyFieldSliderReadout');

            this.setConstraints('0', '360', undefined)
            return [labelContainer, readout];
        };

        setReadout_(readout: Element, value: string) {
            const angleValue = parseFloat(value)
            this.updateAngle(angleValue);
            const readoutText =  (value && value.toString().indexOf(".") >= 0) ? angleValue.toFixed(2) : value
            // Update reporter
            this.reporter.textContent = `${readoutText}°`;
        }

        private updateAngle(angle: number) {
            //angle = Math.max(0, Math.min(360, angle));
            const radius = 90;
            // set the dash offset to be the circumference
            // times the fraction of the angle. 
            const circumference =   3.14*(radius*2) 

            // for 360, 720, etc, show as a complete circle
            const angleFraction =(360-(angle%360))/360
            const isMultipleOf360BiggerThanZero = (angle > 0 && angleFraction === 1);
            
            const dashOffsetLength = (isMultipleOf360BiggerThanZero) ? 0: circumference* angleFraction

            this.pieCircle.setAttribute('stroke-dashoffset', `${Math.abs(dashOffsetLength)}`);
            if (dashOffsetLength < 0) {
                this.pieCircle.setAttribute('transform', 'rotate(-90) scale(-1, 1)');
            }
            else {
                this.pieCircle.setAttribute('transform', 'rotate(-90)');
            } 
        }
    }
}