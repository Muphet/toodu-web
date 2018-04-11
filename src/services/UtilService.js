class UtilService {
  merge(old, updated) {
    const obj = {};
    old.forEach(item => obj[item.id] = item);
    updated.forEach(item => obj[item.id] = item);

    const arr = [];

    for (let id in obj) {
      if (obj.hasOwnProperty(id)) arr.push(obj[id]);
    }

    return arr;
  }
}

export default new UtilService();
