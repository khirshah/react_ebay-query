function addOrRemoveRow(action, fields) {
  
  switch (action.type) {
    
    case 'ADD_SEARCH_ROW':
      const {id} = action;
      return { ...fields,
          [id]: {
            inputF: "",
            dropDown: ""
          }
      }
  }
}

export default function reducer (state = {}, action) {
  //console.log(action)

  switch (action.type) {
    
    case 'ADD_SEARCH_ROW':
      const newFields = addOrRemoveRow(action, state.fields)
      return {
          ...state,
          fields: newFields
      }

    case 'REMOVE_SEARCH_ROW':
      return state;

    case 'INPUT_FIELD_CHANGE':
      return state;

    case 'DROPDOWN_CHANGE':
      return state;

    case 'INCOMING_DATA':
      return state;

    default: 
      return state;
  }
}