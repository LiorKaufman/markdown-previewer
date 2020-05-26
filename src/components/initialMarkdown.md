# Markdown Previewer

**Free Code Camp[1]** project using React[2] and Marked[3] to create a markdown preview editor.

## Author

Lior Kaufman <liorka1990@gmail.com>(https://liorkaufman.com)

### Code Blocks

_React Code Example_

```javascript
import react, { Component } from 'react';
import reactDOM from 'react-dom';

const mountPoint = document.getElementById('root');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'some title';
    };
  }

  render() {
    return (
      <header>
        <h1>
          {this.state.title}
        </h1>
      </header>
    );
  }
}

reactDOM.render(<App />, mountPoint);
```

### Inline Code

example of some `npm i -S react react-dom` inline code

### Blockquote example

> This is a blockquote

### Social Links

1. [Github](https://github.com/liorkaufman 'Github')

## References

1. Free Code Camp (https://freecodecamp.com)
2. React (https://facebook.github.io/react/index.html)
3. Marked (https://github.com/chjj/marked)

[1]: https://freecodecamp.com/ 'Free Code Camp'
[2]: https://facebook.github.io/react/index.html 'React'
[3]: https://github.com/chjj/marked 'Marked'
