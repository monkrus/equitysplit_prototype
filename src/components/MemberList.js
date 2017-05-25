import React from 'react';
import { Table } from 'react-bootstrap';

export default function MemberList(props) {
  let members = props.members.map(function(member) {
        return(
          <tr>
            <th>remove</th>
            <td>{member.name}</td>
          </tr>
        );
    });

  return(
    <div>
        {members}
    </div>
  );
}
