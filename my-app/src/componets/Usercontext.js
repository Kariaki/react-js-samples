import React from "react";

const CreateContext = React.createContext('code component')
const ContextProvider = CreateContext.Provider
const ContextConsumer = CreateContext.Consumer

export {ContextProvider, ContextConsumer}