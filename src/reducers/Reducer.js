

const list = (state = [], action) => {
  switch (action.type) {
    case "ADD_Company":
      let newState1 = [...state, action.task];
      return [...newState1[0]] ;
      case "showCompany":
      debugger;
      let newState2 = [...state, action.task[0]]
      return [...newState2[0]];

      case "_updateSearchResult":
      debugger;
      let newState3 = action.task
      return [
        ...newState3
      ];

      case "updaterightPane":
      let newState = [...state, action.task]
      return [...newState];

    default:
      return state;
  }
};

export default list;
