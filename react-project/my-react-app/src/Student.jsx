import PropsTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ? "yes" : "no"}</p>
        </div>

    );

}
Student.PropsTypes = {
    name : PropsTypes.string,
    age : PropsTypes.number,
    isStudent : PropsTypes.bool,
}
Student.defaultProps = {
    name : "guest0123",
    age : 0,
    isStudent : false,
}
export default Student