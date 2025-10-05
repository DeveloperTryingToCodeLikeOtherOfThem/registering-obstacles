class RegisteringObstacles {

   constructor() {}
   
  protected ___clearScreen() {
       control.eventContext().registerFrameHandler(200, () => control.__screen.update())
   }

   onEveryTileOnTileMapRegistered(tm: tiles.TileMap, handler: () => void) {
      if(tm && tm.enabled) {
          for (let y = 0; y <= tm.areaHeight(); y++) {
              for (let x = 0; x <= tm.areaWidth(); x++) {
                  handler()
              } 
          }
      } else return
   }

   isObstacle(x: number, y: number) {
     const tm = game.currentScene().tileMap

     return tm.isObstacle(x, y)
   }

    getObstacle(x: number, y: number) {
        const tm = game.currentScene().tileMap

        return tm.getObstacle(x, y)
    }

   onAllIfAreObstacles(handler: () => void) {
       const tm = game.currentScene().tileMap
     
       for (let y = 0; y <= tm.areaHeight(); y++) {
           for (let x = 0; x <= tm.areaWidth(); x++) {
              if(this.isObstacle(x, y))
               handler()
               else return
           }
       }
   }
}

