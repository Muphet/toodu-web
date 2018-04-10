import defaultConfig from "../config/default.json";

class ConfigService {
  constructor() {
    const env = process.env.NODE_ENV;
    let envConfig;

    try {
      envConfig = require(`../config/${env}.json`);
    } catch (err) {
      console.warn(`No config file exists for the current environment: expected src/config/${env}.json to exist.`);
      envConfig = {};
    }

    this.config = { ...defaultConfig, ...envConfig };
  }

  get(keys) {
    const splitKeys = keys.split(".");
    return splitKeys.reduce((acc, key, index) => {
      if (acc[key]) {
        return acc[key];
      }

      if (splitKeys.length === index + 1) {
        return undefined;
      }

      return {};
    }, this.config);
  }
}

export default new ConfigService();