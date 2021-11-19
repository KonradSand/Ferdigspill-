var SceneThree = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneThree" });
    },
    init: function(data) {
  //  this.message = data.message;
},

    preload: function() {
      this.load.image('sky', 'assets/Back2.png');
      this.load.image('ground', 'assets/RockyPlat.png');
      this.load.image('star', 'assets/syringe.png');
      this.load.spritesheet('dude', 'assets/spritesheet.png', { frameWidth: 250, frameHeight: 340 }); // skal kanskkje være 340
      this.load.image('block', 'assets/blackbox.png');
      this.load.image('bad', 'assets/bad.png');
      this.load.image('upplat', 'assets/upplat.png');
        this.load.image('dialog', 'assets/dialog.png')
        this.load.image('dialog2', 'assets/dialog2.png')
        this.load.image('goodhead1', 'assets/newgoodhead1.png')
        this.load.image('goodhead2', 'assets/newgoodhead2.png')
        this.load.image('badhead1', 'assets/newbadhead1.png')
        this.load.image('badhead2', 'assets/newbadhead2.png')
          this.load.image('hospital', 'assets/hospital.png')

    },
    create: function() {
      this.arraytraverse = 0 //vi starter på null i traverseringen av arrayetvprt
      this.wheredialog = 0 //se sebere
      this.cameras.main.setBackgroundColor('#ccccff');
      let background = this.add.image( this.cameras.main.width/2, this.cameras.main.height/2, 'hospital');
      let scaleX = this.cameras.main.width / background.width
      let scaleY = this.cameras.main.height / background.height
      let scale = Math.max(scaleX, scaleY)
      background.setScale(scale)//idk egentlig hvorfor jeg har brukt dette kompliserte greiene noenganger for å definere bakgrunnen, men andre ganger ikke. Tror det er fordi bildene egt er litt for små.

      this.dialogsboxes = [{"line1":"Gi meg vaksinen. ","line2":" UMIDDELBART! ", "who":false},{"line1":"Mwahahah. Jeg har ","line2":"onde motiver ", "who":true}]
/*this.dialogboxes definerer dialogen. Line1 er dialog for øverste line, lin2 for nederste, "who" definerer hvem som snakker. False er helten, og true er skurken */

      //  platforms.create(200, 300, 'ground').setScale(1,1).refreshBody();



        player = this.physics.add.sprite(100, 1000, 'dude').setScale(0.15,0.15)



        //player.flipX = false;

        bad = this.physics.add.sprite(200, 1000, 'bad').setScale(0.25,0.25)
      //  this.physics.world.bounds.height = 300;
      //  this.cameras.main.setBounds(0, 0, boundariesW, 600);
        //this.cameras.main.startFollow(player);

        dialog = this.add.image(450, 500, 'dialog').setScale(0.4)
        dialog2 = this.add.image(450, 500, 'dialog2').setScale(0.4)

        this.time.addEvent({ //mye av samme logikken vi har brukt tidligere
            delay: 200,
            loop: true,
            callback: () => {
              if (dialog.alpha === 0){
                dialog.alpha = 1
                dialog2.alpha = 0

                if (goodorbadtalk === false){  //goodorbadtalk definerer hvem som snakker
                  good2.alpha = 1
                  good1.alpha = 0

                }


                else if (goodorbadtalk === true){bad2.alpha = 0
                bad1.alpha = 1}


              }


              else{
                dialog.alpha =0
                dialog2.alpha = 1
                if (goodorbadtalk === false){
                  good2.alpha = 0
                  good1.alpha = 1

                }
                else if (goodorbadtalk === true){bad2.alpha = 1
                bad1.alpha = 0


              }

               }

            }
        })


          text1 = this.add.text(210, 475, " ", { fontSize: '32px', fill: '#FFF' }) //plasseringen til dialogen
          text2 =  this.add.text(310, 530," ", { fontSize: '32px', fill: '#FFF' })


        cursors = this.input.keyboard.createCursorKeys(); //kanskje unødvendig men liker å ha den.


        let xposgood = 100
        let xposbad =700
        good1 = this.add.image(xposgood, 500, 'goodhead1').setScale(0.4)
        good2 = this.add.image(xposgood, 500, 'goodhead2').setScale(0.4)

        bad1 = this.add.image(xposbad, 500, 'badhead1').setScale(0.4)
        bad2 = this.add.image(xposbad, 500, 'badhead2').setScale(0.4)



    },
    update: function(time) {
      /* Rotet nedenpå viser hvvilken dialogboks som skal vises når. Den traverser arrayet, og sørger for at line1 og line2 blir sent riktig. når vi har traversert et objekt beveger
      vi oss til neste, frem til det blir undefined og da hopper den over til neste side. fordi da er det ikke flere bokser å traversere*/
      if(this.dialogsboxes[this.arraytraverse] == undefined){this.scene.start("SceneFour")}
        if(cursors.space.isDown && checktime <time){
          checktime = time +200
          goodorbadtalk = this.dialogsboxes[this.arraytraverse].who //henter true eller false fra arrayet basert på hvor vi er.
          if(this.wheredialog === 0){

             text1.setText(this.dialogsboxes[this.arraytraverse].line1);

          this.wheredialog = 1
        }
        else if(this.wheredialog === 1){//wheredialog bestemmer også hvor vi er.

        text2.setText(this.dialogsboxes[this.arraytraverse].line2);
         this.wheredialog = 2
       }

       else if(this.wheredialog === 2){ this.arraytraverse +=1;
         text1.setText(" ")
         text2.setText(" ")
         this.wheredialog= 0 //etter vi er ferdig med begge linjene hopper en tilbake til 0.
         goodorbadtalk = undefined
          }


      }
    //  controlscheme(time);
    //  collide(this.test,player, this.defGravity)
    //  gravityrush(this)

player.body.world.on('worldbounds', function(body) {
  // Check if the body's game object is the sprite you are listening for
  if (body.gameObject === this) {
    // Stop physics and render updates for this object
    this.setActive(false);
    this.setVisible(false);
  }
}, player);
    }
});
