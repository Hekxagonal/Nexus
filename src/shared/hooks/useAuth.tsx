import React, { createContext, useContext, useMemo, useState } from 'react';

interface IAuthContext {
  isLogged: boolean;
  signIn(): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogged, setIsLogged] = useState<boolean>(true); // default is false

  const signIn = () => {
    setIsLogged(true);
  };

  const signOut = () => {
    setIsLogged(false);
  };

  const values = useMemo(() => ({ isLogged, signIn, signOut }), []);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  return context;
};
