// ALWAYS WHEN CREATING A REACT COMPONENT
import React from 'react';
import data from './data.js';
import MessagesContainer from './MessagesContainer'
import SideBar from './SideBar'
import { Grid } from 'semantic-ui-react'


class App extends React.Component {

  state = {
    channels: data.channels,
    user: data.current_user,
    selectedChannel: data.channels[0]
  }

  selectChannel = (channelId) => {
    let selected = this.state.channels.find((channel) => {
      return channel.name === channelId
    })

    this.setState({ selectedChannel: selected }, () => console.log("state updated", this.state))
  }


  render() {
    // console.log(this.state);
    const { channels, user } = this.state

    return (
      <Grid columns={2} celled>
        <Grid.Column width={4}>
          <h1>Ott</h1>
          <SideBar
            current_user={user}
            channels={channels}
            selectChannel={this.selectChannel}
          />
        </Grid.Column>

        <Grid.Column width={7}>
          <MessagesContainer channels={channels} selectedChannel={this.state.selectedChannel} />
        </Grid.Column>
      </Grid>
    )
  }

}

export default App;
