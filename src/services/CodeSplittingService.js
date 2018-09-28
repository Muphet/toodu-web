import React from 'react';
import Loadable from "react-loadable";
import SceneLoader from "../components/sceneLoader/SceneLoader";

class CodeSplittingService {
  scene(path, loaderTheme) {
    return Loadable({
      loader: () => import(`../scenes/${path}`),
      loading: () => <SceneLoader theme={loaderTheme} />
    });
  }
}

export default new CodeSplittingService();
