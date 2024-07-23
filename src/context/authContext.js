"use client";
import { createContext, useContext, useState } from "react";

const authContext = createContext({});

export function useAuthContext() {
  return useContext(authContext);
}

export default function AuthContextProvider({ children }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [accessToken , setAccessToken] = useState('')

  return <authContext.Provider
  value={{
    email,
    setEmail,
    userName,
    setUserName,
    accessToken,
    setAccessToken
  }}
  >{children}</authContext.Provider>;
}
