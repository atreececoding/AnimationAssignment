class Knight {
    constructor(game) {
        this.game = game;
        

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/KnightSprites.png");
        this.animator = new Animator(this.spritesheet, 0, 0, 99, 70, 6, 0.15);

        this.x = 0;
        this.y = 415;
        this.speed = 100;
        
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 768) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};
