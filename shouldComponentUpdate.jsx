class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I Update?'); 
     // change code below this line
  if (this.props.value != nextProps.value && nextProps.value % 2 === 0) {
      console.log('its even');
     return true;
    } else {
       return false;
    }
  }  
     // change code above this line
  
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};
