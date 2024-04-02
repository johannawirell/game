const actions = {
    FORWARDS: 'FORWARDS',
    RIGHT: 'RIGHT',
    BACKWARDS: 'BACKWARDS',
    LEFT: 'LEFT',
    RUN: 'RUN'
};

export class Controller {
    constructor(player) {
        this.player = player;

        document.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowUp':
                    this.player.walk(actions.FORWARDS);
                    break;
                case 'ArrowRight':
                    this.player.turn(actions.RIGHT);
                    break;
                case 'ArrowDown':
                    this.player.walk(actions.BACKWARDS);
                    break;
                case 'ArrowLeft':
                    this.player.turn(actions.LEFT);
                    break;
                case 'Shift':
                    this.player.run(actions.RUN);
                    break;
            }
        });
    }
}
