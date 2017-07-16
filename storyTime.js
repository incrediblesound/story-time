const processStory = require('./processStory')
const Engine = require('./engine')

const storyFile = process.argv[2];

if (typeof storyFile !== 'string') {
  console.log('You must run storyTime with a story file argument')
  return
}

let story

try {
  story = require(storyFile)
} catch(e){
  console.log('Something went wrong, make sure your story is a javascript file and that you entered the correct path')
}

const storyMap = processStory(story)

const game = new Engine(storyMap)

game.start()

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    game.handleInput(key.name)
  }
});
