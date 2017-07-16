const chalk = require('chalk')
const { EXIT } = require('./constants')

class Engine {
  constructor(storyMap) {
    this.storyMap = storyMap
    this.currentSection = 0
  }
  handleInput(key) {
    const selection = this.storyMap[this.currentSection].options.filter(option => {
      if (`${option.key}` === key) {
        this.transition(option.target)
      }
    })
  }
  transition(target) {
    if (typeof target === 'number') {
      this.currentSection = target
      this.start()
    } else if (target === EXIT) {
      process.exit()
    }
  }
  getFormatter(section) {
    let formatter = chalk
    if (Array.isArray(section.style)) {
      section.style.forEach(style => {
        formatter = formatter[style]
      })
    } else if (typeof section.style === 'string') {
      formatter = formatter[section.style]
    } else {
      formatter = (text) => text
    }
    return formatter
  }
  start() {
    process.stdout.write('\x1B[2J\x1B[0f')
    const section = this.storyMap[this.currentSection]
    const formatter = this.getFormatter(section)
    console.log(formatter(section.text))
    section.options.forEach(option => {
      console.log(`${option.key} ) ${option.text}`)
    })
  }
}

module.exports = Engine
