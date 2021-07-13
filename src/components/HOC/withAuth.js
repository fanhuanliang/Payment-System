import React from 'react'

const withAuth = ( OrgComponent ) => {
  const newComponent = () => {
    return <OrgComponent />;
  }
  return newComponent;
}

export default withAuth
