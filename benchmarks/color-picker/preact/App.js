/* @jsx h */
import { Component, h } from 'preact';
import cs from 'classnames';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColorIndex: 0,
    };
  }

  handleColorClick(colorIndex) {
    this.setState({
      selectedColorIndex: colorIndex,
    });
  }

  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount(this);
    }
    window.onMount();
  }

  renderColors() {
    const { props: { colors }, state: { selectedColorIndex } } = this;
    if (colors.length) {
      return (
        <ul>
          {colors.map((color, i) => (
            <li
              onClick={() => this.setState({ selectedColorIndex: i })}
              key={color}
              className={cs('color', selectedColorIndex === i && 'selected')}
              style={{ backgroundColor: color.hex }}
            >
              {color.name}
            </li>
          ))}
        </ul>
      );
    }
    return <div>No colors!</div>;
  }

  render() {
    const {
      props: {
        colors,
      },
      state: {
        selectedColorIndex,
      },
    } = this;
    const selectedColor = colors[selectedColorIndex];

    return (
      <div className="colors">
        <h1>Choose your favorite color:</h1>
        <div className="colors">
          {this.renderColors(colors)}
        </div>
        <div>
          You chose: <div className="chosen-color">{selectedColor.name}</div>
        </div>
      </div>
    );
  }
};
