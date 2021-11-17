var SceneOne = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneOne" });
    },
    init: function(data) {
  //  this.message = data.message;
  this.message = "Press 'space' to start Game"
},

    preload: function() { this.load.image('background', 'assets/newback2.png'); //Her loader vi bildene og assetsene våre som skal brukes under scenen.
  this.load.image('tostart', 'assets/tostart.png')
  this.load.image('testing2', 'assets/newstart.png')
  this.load.image('testing3', 'assets/newstart2.png')
  this.load.audio('theme', [
        'assets/Audio/Life-Will-Change.ogg', //vi henter både mp3 og ogg fil ettersom tydeligvis er det enkelte nettlesere som ikke aksepterer mp3
        'assets/Audio/Life-Will-Change.mp3'
    ]);


},
    create: function() {
/* I denne koden vil de fleste tingene kun kommenteres en gang.
Dette er for å holde det clean og minske arbeidet fra vår side.
Det betyr at om noe ikke gir mening, og er en gjentagende funksjon,
blir det nok svart på tidligere:)

*/
     this.music = this.sound.add('theme'); //henter musikken


     this.music.play(); //spiller musikken. I Firefox spilles den av med en gang , men i et program som google chrome gjøres det etter første handling
     this.music.loop = true; //sangen skal gjenta seg.
    // game.sound.mute = true
      this.add.image(400, 300, 'background') //Her er den enkleste måten å hente inn bilder.
      text = this.add.image(400, 300, 'testing2').setScale(0.5)
    text2 = this.add.image(400, 300, 'testing3').setScale(0.5) //SetScale endrer størrelsen på objektet. Eks setscale(0.5) vil være halvparten så stort. Dette er egentlig en litt dårlig funksjon å bruke og burde blitt unngått i større prosjekt ettersom en laster unødvendige store assets.
    //over kaller vi to varianter av samme bilde, en stor og en liten.


  //under bytter den mellom bildet på 200 millisekunders intervaler.
 this.time.addEvent({
     delay: 200,
     loop: true,
     callback: () => {
       if (text.alpha === 0){
         text.alpha = 1 //tekst.alpha bestemmer om bildet er synlig eller ikke.
         text2.alpha = 0
       }
       else{ text.alpha = 0;text2.alpha = 1 }

     }
 })


cursors = this.input.keyboard.createCursorKeys(); //gjør at piltastene er brukbare

    },
    update: function() {

      if(cursors.space.isDown){ this.scene.start("SceneTwo") //bestemmer hvilket javascript ark vi flytter oss til.
    } //SceneFive egt

  }  })
