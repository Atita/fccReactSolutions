class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line
const  Camper =(props)=> {
  return (
    <p>{props.name}</p>
  )
};

Camper.propTypes = { name : PropTypes.string.isRequired }
Camper.defaultProps = {name:'CamperBot'}
