import { Component, Prop, h, Element, State } from '@stencil/core';
import { generateBalloonData } from '../../utils/utilsHandlers/balloonHandler';
import { storingEachActivityScore } from '../../utils/utils';

@Component({
    tag: 'lido-balloon',
    styleUrl: 'lido-balloon.css',
    shadow: false,
})

export class LidoBalloon {

    @Element() el: HTMLElement;

    /** Unique identifier for the balloon instance */
    @Prop() id: string = '';

    /** Array of letter options used to randomly choose letters for balloons */
    @Prop() letters: string[] = [];

    /** The correct letter that should be matched on click */
    @Prop() correctAnswer: string = '';

    /** Width of each balloon image (e.g., "400px") */
    @Prop() width: string = '400px';

    /** Height of each balloon image (e.g., "400px") */
    @Prop() height: string = '400px';

    /** Initial horizontal (left) position of the balloon (e.g., "50px") */
    @Prop() x: string = '0px';

    /** Initial vertical (top) position of the balloon (e.g., "100vh") */
    @Prop() y: string = '100vh';

    /** Whether the balloon is visible on screen */
    @Prop() visible: boolean = true;

    /** Path to the base SVG file used to generate balloon images */
    @Prop() svgPath: string = './assets/images/balloon.svg';

    /** Total number of ballon will fly at a single time */
    @Prop() balloonsCount: string = "5"

    /** The base64-encoded data URI of the generated balloon image */
    @State() dataUri: string = '';

    /** The letter shown inside this balloon */
    @State() letter: string = '';

    /** The duration (in seconds) of the balloon's float animation */
    @State() duration: number;

    /** The delay (in seconds) before the balloon starts floating */
    @State() delay: number;


    get parsedLetters(): string[] {
        return typeof this.letters === 'string' ? JSON.parse(this.letters) : this.letters;
    }

    componentWillLoad() {
        this.spawnInitialBalloons();
    }

    async spawnInitialBalloons() {
        for (let i = 0; i < Number(this.balloonsCount); i++) {
            this.spawnBalloon(i);
        }
    }

    async spawnBalloon(index: number) {
        const container = this.el;

        const { dataUri, letter, duration, delay, left } = await generateBalloonData(this.parsedLetters, this.svgPath);

        const balloon = document.createElement('lido-image');
        balloon.setAttribute('src', dataUri);
        balloon.setAttribute('width', '400px');
        balloon.setAttribute('height', '400px');
        balloon.setAttribute('visible', 'true');
        balloon.style.position = 'absolute';
        balloon.style.left = `${left}px`;
        balloon.style.top = '100vh';
        balloon.style.animationDuration = `${duration}s`;
        balloon.style.animationDelay = `${delay}s`;
        balloon.classList.add('balloon-float');

        const letterDiv = document.createElement('div');
        letterDiv.textContent = letter;
        letterDiv.className = 'balloon-float-letter';
        letterDiv.style.left = `${left}px`;
        letterDiv.style.top = '90vh';
        letterDiv.style.animationDuration = `${duration}s`;
        letterDiv.style.animationDelay = `${delay}s`;

        balloon.addEventListener('click', () => {
        const isCorrect = letter === this.correctAnswer;
        if (isCorrect) {
            storingEachActivityScore(true);
        } else {
            storingEachActivityScore(false);
        }
        container.removeChild(balloon);
        container.removeChild(letterDiv);
        this.spawnBalloon(index);
        });

        balloon.addEventListener('animationend', () => {
        if (container.contains(balloon)) container.removeChild(balloon);
        if (container.contains(letterDiv)) container.removeChild(letterDiv);
        this.spawnBalloon(index);
        });

        container.appendChild(balloon);
        container.appendChild(letterDiv);
    }

    render() {
        return this.visible ? <div class="balloon-wrapper" /> : null;
    }
}
