import PropTypes from 'prop-types'
import Buttons from './Buttons'

const Header = ({title, onAdd, addState}) => {
    return (
    <header className='header'>
        <h1>{title}</h1>
        <Buttons color={addState ? "red" : "green"} text={addState ? "close add" : "open add"} onClick = {onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string,
}
export default Header