const { STYLES } = require('./constants')

const processStory = (story) => {
  const storyMap = {}
  story.forEach(section => {
    if ('style' in section) {
      if (typeof section.style === 'string') {
        if(STYLES.indexOf(section.style) === -1){
          throw new Error(`Style is unsupported: ${section.style}`)
        }
      } else if (Array.isArray(section.style)) {
        section.style.forEach(style => {
          if (style === undefined) return
          if(STYLES.indexOf(style) === -1){
            throw new Error(`Style is unsupported: ${style}`)
          }
        })
      }
    }
    storyMap[section.id] = section
  })
  return storyMap
}

module.exports = processStory
