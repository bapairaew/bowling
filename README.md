# Bowling

## Task description
>  Bowling Challenge

>  * Please create a repository in GitHub (or similar) so that we can follow your progress.
* The implementation should use "vanilla" JavaScript (no libraries). Bonus points for using React/Redux for the solution.
* Feel free to use modern Frontend Dev workflow.
* Remember that we are more interested how you approach this problem than completing all the features (if you don't have enough time explain how you would progress).


>  Minimum (keep in mind the optional requirements):

 >  - Implement a scoring system for a bowling game according to these rules:
  - A game consists of 10 frames.
  - In general each frame has 2 rolls.
  - In general a player scores the number of pins knocked down.
  - If the player knocks down all 10 pins on the first roll it’s a strike. The player scores 10 plus the number of pins knocked down in the next two rolls.
  - If the player knocks down all 10 pins in two rolls it’s a spare. The player scores 10 plus the number of pins knocked down in the next roll.
- A decent visualisation of the game. Be creative here :)

>  Bonus:

>  - Add support for the last frame in the game:
 - The player gets additional rolls in the last frame: one additional for a spare after the second roll or two extra rolls for a strike.
* Create a method that randomly throws a roll (one roll is 1-10 pins knocked down), and progresses the scoring.
* Support multiple players.
* Or anything fun you can think of :)


## Tasks
- ~~Set up project with Redux~~
- ~~Game container~~
  - ~~Lane component~~
  - ~~Frame component~~
  - ~~Score component~~
- Last frame: additional rolls
- Game-like UI
  - Random scores
  - Bowling animation
  - End game screen
- Multiplayers
  - Socket.io
  - React routing
  - Join room container
- Universal rendering
