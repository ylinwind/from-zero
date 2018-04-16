let initState = {
    state : 0
}

export default function counter(state = initState.state, action) {
    switch (action.type) {
    case 'TEST_ACTION_1':
      return state + action.type + '-';
    default:
      return state;
    }
  }