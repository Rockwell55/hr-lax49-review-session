import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) => (
  <div>
    {props.students.map(student => (
      <ListElement
        key={student.id}
        student={student}
        getStudents={props.getStudents}
      />
    ))}
  </div>
);

export default List;