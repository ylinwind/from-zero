let initState = {
    state : ''
}

export default function counter(state = initState.state, action) {
    switch (action.type) {
    case 'TEST_ACTION_2':
      return state + action.type + '-';
    default:
      return state;
    }
  }