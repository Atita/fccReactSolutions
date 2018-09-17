class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
      console.log("My Component is mounting");
  }
  render() {
    return <div> Mounted Now
    {console.log('Mounted')}
     </div>
  }
};
