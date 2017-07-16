StoryTime
=========

A simple choose-your-own-adventure engine for Node.js

A story is an array of section objects that link to each other via keypress activated options.

Currently only a small set of functionality is supported:

- colors and styles for section text
- direct links to sections via section id
- a single constant `'EXIT'` for the exit game option

To use, define a game using the included example as a model and run like this:

```shell
node storyTime ./path_to/myStory.js
```
