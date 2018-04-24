import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getProjects } from "../../../../core/projects/projectsActions";
import {
  getStars,
  destroyStar,
  createStar
} from "../../../../core/stars/starsActions";

const projectsSelector = state => state.core.projects.data;
const starsSelector = state => state.core.stars.data;
const selectedProjectIdSelector = state => state.scenes.dashboard.project;

const sortedProjectsSelector = createSelector(
  [projectsSelector, starsSelector],
  (projects, stars) =>
    projects.sort((a, b) => {
      const ids = stars.map(star => star.project_id);
      if (ids.includes(a.id)) return -1;
      if (ids.includes(b.id)) return 1;
      else return 0;
    })
);

const starredProjectIdsSelector = createSelector(starsSelector, stars =>
  stars.map(star => star.project_id)
);

const selectedProjectSelector = createSelector(
  [projectsSelector, selectedProjectIdSelector],
  (projects, selectedProjectId) =>
    projects.find(project => project.id === selectedProjectId)
);

const mapStateToProps = state => ({
  projects: sortedProjectsSelector(state),
  selectedProject: selectedProjectSelector(state),
  stars: starsSelector(state),
  starredProjectIds: starredProjectIdsSelector(state)
});

export default connect(mapStateToProps, {
  getProjects,
  getStars,
  destroyStar,
  createStar
});
