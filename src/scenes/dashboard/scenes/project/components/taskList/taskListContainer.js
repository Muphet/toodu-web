import { connect } from "react-redux";
import { getTasksForProject } from "../../../../../../core/tasks/tasksActions";

const mapStateToProps = (state, props) => ({
  fetching: state.core.tasks.fetchingProject === props.projectId,
  error: state.core.tasks.errorProject,
  tasks: state.core.tasks.data.filter(
    task => task.project_id === props.projectId
  )
});

export default connect(mapStateToProps, { getTasksForProject });
