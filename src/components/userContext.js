import React, { Component } from 'react'

//1.creating context and export it

const UserContext=React.createContext('Centre For Good Governance')
//2.
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}

export default UserContext