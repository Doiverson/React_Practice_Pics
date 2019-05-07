import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
    { key: 1, text: 'Photo', value: 1 },
    { key: 2, text: 'Collection', value: 2 },
    { key: 3, text: '****', value: 3 },
]

const DropdownList = () => <Dropdown clearable options={options} selection />

export default DropdownList;
