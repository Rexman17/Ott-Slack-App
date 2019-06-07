import React from 'react'
import Profile from './Profile'
import { Grid } from 'semantic-ui-react'
import ChannelsContainer from './ChannelsContainer'

class SideBar extends React.Component {

  render () {
    // console.log("SideBar props", this.props);
    const { current_user, channels, selectChannel } = this.props

    return (
      <div>
        <Grid celled>
          <Profile current_user={current_user} />
        </Grid>

        <Grid celled>
          <h4>Channels</h4>
          <ChannelsContainer channels={channels} selectChannel={selectChannel} />
        </Grid>
      </div>
    )
  }
}

export default SideBar
