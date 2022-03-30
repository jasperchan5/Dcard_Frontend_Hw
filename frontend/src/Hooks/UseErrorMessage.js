import React, { useContext, useState, useEffect } from "react"
const ErrorMessageContext = React.createContext({
    messages: [],
    AddMessage: () => {},
    RemoveMessage: () => {}
});

const ErrorMessageProvider = (props) => {
    const [messages,setMessages] = useState([]);

    const AddMessage = (input) => {
        setMessages([...messages,input]);
        messages.length < 4 ? 
        setTimeout(() => RemoveMessage(), 2000) :
        setMessages([...messages.slice(messages.length-5)]);
    }

    const RemoveMessage = () => {
        setMessages([]);
    }

    return(
        <ErrorMessageContext.Provider value={{
            messages,
            AddMessage,
            RemoveMessage
        }} {...props}></ErrorMessageContext.Provider>
    )
}

const UseErrorMessage = () => {
    return useContext(ErrorMessageContext);
}

export { ErrorMessageProvider, UseErrorMessage };
