import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

function SelectContainer() {
  const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
  ];

  return (
    <div>
      <Select
        name="someName"
        value="one"
        options={options}
        onChange={() => console.log('Hello')}
      />


    </div>
  );
}

export default connect()(SelectContainer);
