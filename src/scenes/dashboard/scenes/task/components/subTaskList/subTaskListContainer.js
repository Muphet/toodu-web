import { connect } from "react-redux";
import { getSubTasksForTask } from "../../../../../../core/subTasks/subTasksActions";

const mapStateToProps = (state, props) => ({
  fetching: state.core.subTasks.fetching,
  error: state.core.subTasks.error,
  subTasks: state.core.subTasks.data.filter(
    subTask => subTask.task_id === props.taskId
  )
});

export default connect(mapStateToProps, { getSubTasksForTask });
