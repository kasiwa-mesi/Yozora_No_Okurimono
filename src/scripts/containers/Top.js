import { connect } from 'react-redux'
import Top from '../components/Top'
import { openMenu } from '../actions/menu'

const mapStateToProps = state => ({
  effect: state.menu.effect
})

const mapDispatchToProps = dispatch => ({
  openMenu() {
    dispatch(openMenu())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)
