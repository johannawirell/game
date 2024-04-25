export class InputHandler {
    constructor(player) {
        this.player = player;
        this.setupListeners();
    }

    setupListeners() {
        document.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    onKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp':
                this.player.move('forward');
                break;
            case 'ArrowDown':
                this.player.move('backward');
                break;
            case 'ArrowLeft':
                this.player.move('left');
                break;
            case 'ArrowRight':
                this.player.move('right');
                break;
        }
    }
}
