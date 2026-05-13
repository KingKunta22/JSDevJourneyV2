// import PropTypes from 'prop-types'

function Student(props) {
  return (
    <>
      <div className="student">
        <h1>Student Information</h1>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
}

// Student.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.age,
//     isStudent: PropTypes.bool,
// }

export default Student;
