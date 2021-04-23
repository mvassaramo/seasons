import React from 'react';

const Error = props => <div>{props.message}</div>

Error.defaultProps = {
  message: "Oops, something went wrong!"
}

export default Error;