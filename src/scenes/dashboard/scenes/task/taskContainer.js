import { connect } from "react-redux";
import { createSelector } from "reselect";

const tasksSelector = state => state.core.tasks.data;
const currentTaskIdSelector = (state, props) => props.match.params.taskId;

const taskSelector = createSelector(
  [ tasksSelector, currentTaskIdSelector ],
  (tasks, currentTaskId) => tasks.data.find(
    task => task.id === currentTaskId
  )
)

const mapStateToProps = (state, props) => ({
  task: taskSelector(state, props)
});

export default connect(mapStateToProps, {});
