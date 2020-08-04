console.clear();

// People dropping off a form (Action creator)
const createPolicy = (name, amount) => {
  return { // return form (Action)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};


// Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action (form)
    return [...oldListOfClaims, action.payload];
  }
  
  // we don't care about the action (form)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return (bagOfMoney - action.payload.amountOfMoneyToCollect);
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};


const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
  
    return [...listOfPolicies, action.payload.name];
  
  } else if (action.type === 'DELETE_POLICY') {
    
    return listOfPolicies.filter(name => name !== 
    action.payload.name);
  
  }
  
  return listOfPolicies;
};


const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies,
});

const store = createStore(ourDepartments);

const action = createPolicy('Alex', 20);
store.dispatch(action);

store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));

console.log(store.getState());
