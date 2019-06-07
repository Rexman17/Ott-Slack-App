import React from 'react';
import Message from './Message'

class MessagesContainer extends React.Component {

  // mapMsgs = () => {
  //   return this.props.channels.map((chann) => {
  //
  //   })
  // }

  render() {
    console.log("messages container", this.props);
    const { channels } = this.props

    return (
      <div>shart</div>
    )
  }
}


export default MessagesContainer
