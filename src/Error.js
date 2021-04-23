import React from 'react';


const Error = (props) => {
  return(
    <div>{props.message}</div>
  )
}

Error.defaultProps = {
  message: "Oops, something went wrong!"
}

export default Error;