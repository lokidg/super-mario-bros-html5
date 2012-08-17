var playground;
var context;

window.onload = function() {

    playground = document.getElementById("playground");
    context = playground.getContext("2d");

    var Block = new Class({

        initialize: function() {
                    },

        tile: function() {

                  return null;
              },

        width: 16,

        height: 16
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
                      }
                  }
    });

    var mapParser = new MapParser();

    for (var i = 0; i < map.length; i++) {

        for (var j = 0; j < map[i].length; j++) {

            var image = mapParser.getTile(map[i][j]);
            context.drawImage(image.tile(), j * 16, i * 16);
        }
    }
}

function move(length) {

    if (x > -3392 * 2 + 740) {
        x -= length;
        context.drawImage(level, x, y, playgroundWidth, playgroundHeight);
    }
}
