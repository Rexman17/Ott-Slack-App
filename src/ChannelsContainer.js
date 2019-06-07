import React from 'react'


class ChannelsContainer extends React.Component {

  handleClick = (event) => {
    this.props.selectChannel(event.target.id)
  }

  render() {
    // console.log("ChannelsContainer", this.props);
    const { channels } = this.props

    const mappedChannels = channels.map((channel) => {
      return <li
              id={channel.name}
              onClick={this.handleClick}
              key={channel.name}>
              {channel.name}
            </li>
    })

    return (
      <div>
        {mappedChannels}
      </div>
    )
  }
}

export default ChannelsContainer
