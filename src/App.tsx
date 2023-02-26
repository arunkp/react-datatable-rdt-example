import React, { useState } from 'react';
import ReactDataTableRDT from 'react-datatable-rdt';
import './App.css';
import { dataType } from 'react-datatable-rdt/lib/cjs/utils/PropTypes';

const App = () => {
  const [rawData] = useState<dataType[]>([
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // [1, 'Snow', 'Jon', '35'],
  ]);

  return (
    <div className="wrapper">
      <h2 className="header">Example with data prop</h2>
      <ReactDataTableRDT
        tableTitle={<h3>HTML Header</h3>}
        selectable
        columns={[
          { field: 'id', fieldHeader: 'ID' },
          { field: 'firstName', fieldHeader: 'First Name' },
          { field: 'lastName', fieldHeader: 'last Name' },
          { field: 'age', fieldHeader: 'Age' },
        ]}
        data={rawData}
        getSelectedRow={(rows) => console.log('rows->', rows)}
        // paginated={{
        //   data: rawData,
        //   total: rawData.length,
        //   skip: 3,
        //   take: 3,
        // }}
      />
      <h2 className="header">Example with paginated prop</h2>
      <ReactDataTableRDT
        tableTitle="This is a standard String"
        selectable
        columns={[
          { field: 'id', fieldHeader: 'ID' },
          { field: 'firstName', fieldHeader: 'First Name' },
          { field: 'lastName', fieldHeader: 'last Name' },
          { field: 'age', fieldHeader: 'Age' },
        ]}
        // data={rawData}
        getSelectedRow={(rows) => console.log('rows->', rows)}
        paginated={{
          data: rawData,
          total: rawData.length,
          skip: 3,
          take: 3,
        }}
      />
    </div>
  );
};

export default App;
