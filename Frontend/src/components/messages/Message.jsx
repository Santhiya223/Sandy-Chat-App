import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message && (
    message.senderId === authUser._id || 
    message.newMessage?.senderId === authUser._id
  );
  const isNewMessage = message?.newMessage?.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-500";
  const formattedTime = extractTime(message.createdAt ?? message.newMessage.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  if (!message) {    return <div>Loading message...</div>;
  } 

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img 
            alt="Profile"
            src={profilePic || 'default-profile-pic-url'} 
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
        {isNewMessage ? message.newMessage.message : message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 text-white items-center">
        {formattedTime}
      </div> 
    </div>
  );
};

export default Message;
