import { connect } from "react-redux";
import { getSubTasksForTask } from "../../../../../../core/subTasks/subTasksActions";

const subTasksSelector = state => state.core.subTasks.data;
const currentTaskIdSelector = (state, props) => props.taskId;

const subTasksForCurrentTaskSelector = createSelector(
  [ subTasksSelector, currentTaskIdSelector ],
  (subTasks, currentTaskId) => subTasks.filter(
    subTask => subTask.task_id === currentTaskId
  )
);

const mapStateToProps = (state, props) => ({
  subTasks: subTasksForCurrentTaskSelector(state, props)
});

export default connect(mapStateToProps, { getSubTasksForTask });
