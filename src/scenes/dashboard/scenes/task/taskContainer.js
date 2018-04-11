import { connect } from "react-redux";

const mapStateToProps = (state, props) => ({
  task: state.core.tasks.data.find(
    task => task.id === props.match.params.taskId
  )
});

export default connect(mapStateToProps, {});
