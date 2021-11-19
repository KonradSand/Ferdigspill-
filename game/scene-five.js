var SceneFive = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneFive" });
    },
    init: function(data) {
  //  this.message = data.message;
},

    preload: function() {
      this.load.image('sky', 'assets/Sewer.png');
      this.load.image('ground', 'assets/RockyPlat.png');
      this.load.image('star', 'assets/syringe.png');
      this.load.spritesheet('dude', 'assets/spritesheet.png', { frameWidth: 250, frameHeight: 340 }); // skal kanskkje være 340
      this.load.image('block', 'assets/blackbox.png');
      this.load.image('square', 'assets/block.png');
      this.load.image('upplat', 'assets/upplat.png');
      this.load.image('enemy', 'assets/bomb.png');
      this.load.image('goalpost', 'assets/goalpost.png');
      this.load.audio('theme', [
            'assets/Audio/Persona-5-Royal-Take-Over.ogg',
            'assets/Audio/Persona-5-Royal-Take-Over.mp3'
        ]);

    },
    create: function() {
      this.score = 3 //starter på 3 og subtraheres for hver blå ting du finner

      this.cameras.main.setBackgroundColor('#ccccff');
      let background = this.add.image( this.cameras.main.width/2, this.cameras.main.height/2, 'sky');
      let scaleX = this.cameras.main.width / background.width
      let scaleY = this.cameras.main.height / background.height
      let scale = Math.max(scaleX, scaleY)
      background.setScale(scale)
      background.setScrollFactor(0);

      let boundariesW = 2000
      let boundariesH = 2000



        platforms = this.physics.add.staticGroup();
        platforms.create(0, 570, 'ground').setScale(2,4).refreshBody();
        platforms.create(300, 1000, 'ground').setScale(2,1).refreshBody();


        for(var j = 1000; j < 2000; j +=200){ //hvordan vi setter opp banen. Alt er da like langt unna hverandre og sparer meg masse tid å skrive inn objektene.
        for (var i = 200; i < 2000; i +=200)
    {
        platforms.create(j, i, 'square').setScale(1,1).refreshBody();


    }}
    goalpost = this.physics.add.staticGroup();
      goalpost.create(1000, 1100, 'goalpost').setScale(1,1).refreshBody();
      goalpost.create(1500, 700, 'goalpost').setScale(1,1).refreshBody();
      goalpost.create(1700, 1700, 'goalpost').setScale(1,1).refreshBody();

        platforms.create(700,500 , 'upplat').setScale(0.25,0.25).refreshBody();

        danger = this.physics.add.staticGroup();
        danger.create(0,300 , 'ground').setScale(40,1).refreshBody();


        danger.setTint(0xff0000); // lagde egt danger elementet fordi jeg kunne og ikke så mye annet. Har samme funksjon som barriersene. Og kan bli brukt til en utvidelse.



        scoreText = this.add.text(16, 16, 'Blue gates remaining: ' + this.score, { fontSize: '32px', fill: '#FFF', backgroundColor: '#000' })
        this.add.text(75, 550, 'Use WASD to control gravity .', { fontSize: '32px', fill: '#FFF',backgroundColor: '#000' })
      //  this.add.text(650, 550, 'Try S', { fontSize: '32px', fill: '#FFF' })


        scoreText.setScrollFactor(0) //sørger for at teksten følger kamera

        player = this.physics.add.sprite(100, 475, 'dude').setScale(0.15,0.15)
        player.setBounce(0);
      //  player.setCollideWorldBounds(true);
      //  player.body.onWorldBounds = true;
        player.setOrigin(0.5,0.5)
        //this.player.anchor.setTo(0.5)


        //player.flipX = false;


        this.physics.world.bounds.width = boundariesW;
        this.physics.world.bounds.height = boundariesH;

      //  this.physics.world.bounds.height = 300;
        this.cameras.main.setBounds(0, 0, boundariesW, boundariesH);
        this.cameras.main.startFollow(player);


        cursors = this.input.keyboard.createCursorKeys();

        stars = this.physics.add.group({
            key: 'star',
            setXY: { x: 100, y: 0 }
        }); //viser vaksinen av tematiske grunner eller no.

        this.physics.add.collider(player, platforms);
      //  this.physics.add.collider(player, danger);
        this.physics.add.collider(stars, platforms);

      //  this.physics.add.overlap(player, stars, collectStar, null, this);

        this.physics.add.overlap(player, danger, hit, null, this);
        this.physics.add.overlap(player, goalpost, remaining, null, this); //se index for mer om denne.





        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 4 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 0 } ],
            frameRate: 20
        });


        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 4 }),
            frameRate: 10,
              //  duration: 1000,
            repeat: -1
        });


    },
    update: function(time) {
      if(player.body.checkWorldBounds( ) === true){
          this.scene.restart(); // dette blir ikke plasert inne i en function siden det vil gjøre at funksjonen ikke fungerer lengre

        console.log(player.body.checkWorldBounds( ))}

      controlscheme(time);
      gravityrush(this)
    }
});
