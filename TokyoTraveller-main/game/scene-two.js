var SceneTwo = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneTwo" });
    },
    init: function(data) {
  //  this.message = data.message;
  this.message = "Press 'space' to start Game"
},

    preload: function() { this.load.image('background', 'assets/backtest.png');
    this.load.image('newback', 'assets/city.jpg');
  this.load.image('tostart', 'assets/tostart.png')
  this.load.image('newgame1', 'assets/newgame1.png')
  this.load.image('newgame2', 'assets/newgame2.png')
  this.load.image('selectlevel1', 'assets/selectlevel1.png')
  this.load.image('selectlevel2', 'assets/selectlevel2.png')
  this.load.image('options1', 'assets/options1.png')
  this.load.image('options2', 'assets/options2.png')
  this.load.image('selected', 'assets/selectnew.png')
  this.load.image('selected2', 'assets/selectnew2.png')
  this.load.audio('theme', [
        'assets/Audio/Life-Will-Change.ogg',
        'assets/Audio/Life-Will-Change.mp3'
    ]);

},
    create: function() {
      this.selectposition = 0 //viser at vi starter på første alternativ av valgene.
       checktime = 0 ; //se senere for forklaring.

      this.press = false/
      this.add.image(400, 300, 'newback')
      xpos = 400
      ypos1 = 100 //bestemmer posisjonen til bildene vi skal bruke i denne siden.
      ypos2 = 300
      ypos3 = 500
      this.select = [ypos1,ypos2,ypos3] //legger all informasjonen inn i et array for senere bruk.
      newgame1 = this.add.image(xpos, ypos1, 'newgame1').setScale(0.5)
      newgame2 = this.add.image(xpos, ypos1, 'newgame2').setScale(0.5)
      level1 = this.add.image(xpos, ypos2, 'selectlevel1').setScale(0.5)
      level2 = this.add.image(xpos, ypos2, 'selectlevel2').setScale(0.5)
      opt1 = this.add.image(xpos, ypos3, 'options1').setScale(0.5)
      opt2 = this.add.image(xpos, ypos3, 'options2').setScale(0.5)
      selected = this.add.image(450, ypos1, 'selected').setScale(0.6)
      selected2 = this.add.image(450, ypos1, 'selected2').setScale(0.6)

      selected2.alpha = 0 //selected er den røde seleksjonsverktøyet, vi starter med å gjøre den ene variatnen usynlig
      selected2.flipX = true
      selected.flipX = true//på grunn av at vi lagde firkanten feil vei, roterer vi bare det i koden. Dette er en dårlig og litt lat løsning av oss.




 this.time.addEvent({ //se scene-one for forklaring på hva vi gjør her.
     delay: 200,
     loop: true,
     callback: () => {
       if (newgame1.alpha === 0){
         newgame1.alpha = 1
         newgame2.alpha = 0

         level1.alpha =0
         level2.alpha =1

         opt1.alpha =1
         opt2.alpha =0

         selected.alpha = 0
         selected2.alpha = 1

       }
       else{
          newgame1.alpha = 0;
         newgame2.alpha = 1;

         level1.alpha =1
         level2.alpha =0


         opt1.alpha =0
         opt2.alpha =1

         selected.alpha = 1
         selected2.alpha =0
        }

     }
 })




cursors = this.input.keyboard.createCursorKeys();

    },
    update: function(time) {// en innebygd funksjon i Phaser er muligheten for å hente time. Den gir rett og slett tiden.

console.log(this.selectposition);


      if(cursors.space.isDown && this.selectposition == 0 ){this.scene.start("SceneThree")} //dersom vi har valgt det øverste meny valget går vi til neste scene.

      else if(cursors.space.isDown && this.selectposition == 1 ){
whatlevel = prompt("What level do you wish to start from? (write 1, 2 or 3)")
  if (whatlevel == 1){this.scene.start("SceneFour")}
else if (whatlevel == 2){this.scene.start("SceneFive")}
else if (whatlevel == 3){this.scene.start("SceneSix") }


}
      else if(cursors.space.isDown && this.selectposition == 2 ){this.scene.start("SceneEight")} // dersom vi går til nr tre menyvalg hopper vi til "settings siden"
      if(cursors.down.isDown && time > checktime){
         checktime = time + 200

        this.selectposition = this.selectposition +1
        selected.y = this.select[this.selectposition]
        selected2.y = this.select[this.selectposition]
        if(this.selectposition >=3){this.selectposition = 0
        selected.y = this.select[this.selectposition]
        selected2.y = this.select[this.selectposition]

      }


      }
      else if(cursors.up.isDown && time > checktime){
         checktime = time + 200

        this.selectposition = this.selectposition -1
        selected.y = this.select[this.selectposition]
        selected2.y = this.select[this.selectposition]
        if(this.selectposition <0){this.selectposition = 2
        selected.y = this.select[this.selectposition]
        selected2.y = this.select[this.selectposition]
      }
      }


    //  if(cursors.left.isDown){ this.music.stop()}

    }

});
