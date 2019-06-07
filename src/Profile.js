import React from 'react'
import { Card } from 'semantic-ui-react'

class Profile extends React.Component {

  render () {
    // console.log("Profile props", this.props);
    const { current_user } = this.props

    return (
      <Card
        image={current_user.profile_picture}
        header={current_user.username}
      />

    )
  }
}

export default Profile
