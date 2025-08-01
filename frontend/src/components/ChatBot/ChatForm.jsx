import React, { useRef } from "react";
import './ChatBot.css'
import { lazy } from "react";
const ChatForm = ({chatHistory,setChatHistory,generateBotResponse}) => {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    const userMessage = inputRef.current.value.trim();
    event.preventDefault();
    if (!userMessage) return;
    inputRef.current.value = "";
    setChatHistory(history=>[...history,{role:'user',text:userMessage}])
     setTimeout(() => {
        setChatHistory(history=>[...history,{role:'user',text:"Thinking..."}])
        generateBotResponse([...chatHistory,{role:'user',text:`Using the details provided above ,please address these query ${userMessage}`}])
     }, 600);
  };

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type a message..."
        className="message-input"
      />
      <button type="submit" className="send-button">
       <svg width="24px" height="24px" viewBox="-12.96 -12.96 49.92 49.92" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z" fill="#f8f7f7"></path> </g></svg>
      </button>
    </form>
  );
};

export default ChatForm;
