import Inferno from 'inferno';
import Component from 'inferno-component';
import cs from 'classnames';

const { linkEvent } = Inferno;

function handleColorClick({component, colorIndex}) {
  component.setStateSync({
    selectedColorIndex: colorIndex
  });
}

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
              onClick={linkEvent(
                {component: this, colorIndex: i},
                handleColorClick,
              )}
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
    const { selectedColorIndex } = this.state;
    const selectedColor = this.props.colors[selectedColorIndex];
    return (
      <div className="colors">
        <h1>Choose your favorite color:</h1>
        <div className="colors">
          {this.renderColors()}
        </div>
        <div>
          You chose: <div className="chosen-color">{selectedColor.name}</div>
        </div>
      </div>
    );
  }
};
