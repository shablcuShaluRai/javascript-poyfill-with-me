const makeAPICall = async (url, config) => {
  console.log("fresh call is happenig");
  try {
    const res = await fetch(url, config);
    const response = res.json();
    return response;
  } catch (e) {
    return e;
  }
};

function cacheApiCal(time) {
  const cacheObj = {};
  return async (url, config = {}) => {
    const key = `${url}${JSON.stringify(config)}`;
    const selectedCache = cacheObj[key];
    if (!selectedCache || Date.now() > selectedCache.expiredAt) {
      try {
        const value = await makeAPICall(url, config);
        cacheObj[key] = { value, expiredAt: Date.now() + time };
      } catch (e) {
        console.log("e", e);
      }
    }
    console.log("cache call", cacheObj[key]);
    return cacheObj[key].value;
  };
}
const callApi = cacheApiCal(200);

callApi("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("a", a)
);

callApi("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("b", a)
);
