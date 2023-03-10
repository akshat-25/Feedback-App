import PropTypes from 'prop-types'

function Card({children,reverse}) {
//   return (     // THIS IS CONDITIONAL CLASS
//     <div className={`card ${reverse && 'reverse'}`}>
//         {children}
//     </div>
//   )

return (     // THIS IS CONDITIONAL STYLING
    <div
    className="card"
    style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#ffff',
        color: reverse ? '#fff' : '#000',
    }}
    >
    {children}
    </div>
)
}

Card.defaultProps = {
 reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default Card