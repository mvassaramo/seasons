import React from 'react';

const Error = props => <h1>{props.message}</h1>

Error.defaultProps = {
  message: "Oops, something went wrong!"
}

export default Error;