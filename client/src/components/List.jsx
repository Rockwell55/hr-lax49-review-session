import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) => (
  <div>
      {props.students.map((student) => (
        <ListElement
          key={student.id}
          student={student}
          // image={student.imgurl}
          getStudents={props.getStudents}
        />
      ))}
  </div>
);

export default List;


// {/* <img src='https://ca.slack-edge.com/T02DNK3PH-U01ATPUTRH8-0c6b5a486403-512'></img> */}