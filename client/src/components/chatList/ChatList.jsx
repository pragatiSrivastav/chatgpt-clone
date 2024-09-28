import './chatList.css'
import { Link, Outlet } from "react-router-dom";

const ChatList = () => {
  return (
    <div className='chatList'>
      <span className='title'>DASHBOARD</span>
      <Link to="/">Create a new Chat</Link>
      <Link to="/">Explore Pragati AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className='title'>RECENT CHATS</span>
      <div className="list">
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Pragati AI pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList