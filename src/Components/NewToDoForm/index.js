import React, { Component } from 'react';

const NewToDoForm = ({onChange, draft, onSubmit}) => (
<div>
  <input type='Text' onChange={onChange} value={draft} />
  <button onClick={onSubmit}>Add</button>
</div>
)

export default NewToDoForm