import React from 'react';

const Title = ({name, lastname}) => (
    <h1>Ola {`${name} ${lastname}`}</h1>
)

Title.defaultProps = {
    name: 'unknow',
    lastname: 'without lastName'
}
export default Title;