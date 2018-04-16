import { connect } from 'react-redux'
import { test1 , test2 } from '../../actions/portal/test'
import TestComs from '../../components/portal/test'

const mapStateToProps = (state, ownProps) => {//ownProps  自身的props变化也会执行这个方法
  return {
    state,
    ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickHere: () => {
      dispatch(test1(ownProps.filter))
    },
    clickTest_2:()=>{
      dispatch(test2(ownProps.filter))
    }
  }
}

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComs)

export default TestContainer