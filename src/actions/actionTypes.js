let nextId = 1;
export const _addCompany = task => {
  return { type: "ADD_Company", id: nextId++, task };
}

export const _ShowCompany = taskid => {
  return {type: "showCompany",taskid};
}

export const ShowCompany = task => {
  return {type: "showCompany" , task}
}

export const UpdaterightPane = task => {
  return {type: "updaterightPane",task}
}

export const UpdateSearchResult = task => {
  return { type: "_updateSearchResult",task };
}

var obj;
export const JsonFetchData = url => {
  /*Action Creator which returns function insted of an action*/
return dispatch => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(items => { debugger; obj = items; console.log(items);dispatch(_addCompany(items))  })
      .catch(() => dispatch(console.log("Unable to Get the data")));
  };
}