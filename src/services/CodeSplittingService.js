import Loadable from "react-loadable";
import SceneLoader from "../components/sceneLoader/SceneLoader";

class CodeSplittingService {
  scene(path) {
    return Loadable({
      loader: () => import(`../scenes/${path}`),
      loading: SceneLoader
    });
  }
}

export default new CodeSplittingService();
