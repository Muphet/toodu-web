class UtilService {
  merge(old, updated) {
    if (!Array.isArray(updated)) updated = [updated];

    const obj = {};
    old.forEach(item => obj[item.id] = item);
    updated.forEach(item => obj[item.id] = item);

    const arr = [];

    for (let id in obj) {
      if (obj.hasOwnProperty(id)) arr.push(obj[id]);
    }

    return arr;
  }

  removeById(data, item) {
    const index = data.indexOf(data.find(el => el.id === item.id));
    if (index < 0) return data;
    return data.slice(0, index).concat(data.slice(index + 1, data.length));
  }
}

export default new UtilService();
