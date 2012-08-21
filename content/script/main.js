window.onload = function() {

    var playground = document.getElementById("playground");
    var context = playground.getContext("2d");

    var Block = new Class({

        initialize: function() {
                    },

        tile: function() {

            return null;
        },

        width: 16,

        height: 16,

        isActive: false,

    });

    var Ground = new Class({

        Extends: Block,

        tile: function() {
            var image = new Image();
            image.src = "content/image/platform-top.png";
            return image;
        },
    });

    var EmptyBlock = new Class({
        
        Extends: Block,

        tile: function() {
            var image = new Image();
            image.src = "content/image/platform-air.png";
            return image;
        },
    });

    var Sky = new Class({
        
        Extends: Block,

        tile: function() {
            var image = new Image();
            image.src = "content/image/tile-sky.png";
            return image;
        },
    });

    var QuestionBlock = new Class({
        
        Extends: Block,

        tile: function() {

            var animationSlide1 = new Image();
            var animationSlide2 = new Image();
            var animationSlide3 = new Image();
            var animationSlide4 = new Image();

            animationSlide1.src = "content/image/platform-q.png";
            animationSlide2.src = "content/image/platform-q1.png";
            animationSlide3.src = "content/image/platform-q2.png";
            animationSlide4.src = "content/image/platform-q3.png";

            var animation = [
                
                animationSlide1,
                animationSlide2,
                animationSlide3,
                animationSlide4
            ];

            // return animation;
            return animationSlide1;
        }
    });

    var Brick = new Class({
        
        Extends: Block,

        tile: function() {
            var image = new Image();
            image.src = "content/image/platform-brick.png";
            return image;
        },
    });

    var MapParser = new Class({
        
        initialize: function() {
                    },

        getTile : function(number) {
                      switch (number) {
                          case 0:
                              return new Sky();
                              break;
                          case 1:
                              return new Ground();
                              break;
                          case 2:
                              return new QuestionBlock();
                              break;
                          case 3:
                              return new Brick();
                              break;
                      }
                  }
    });

    var mapParser = new MapParser();

    for (var i = 0; i < map.length; i++) {

        for (var j = 0; j < map[i].length; j++) {

            var tile = mapParser.getTile(map[i][j]);

            context.drawImage(tile.tile(), j * 16, i * 16);
        }
    }
}

function move(length) {

    if (x > -3392 * 2 + 740) {
        x -= length;
        context.drawImage(level, x, y, playgroundWidth, playgroundHeight);
    }
}
