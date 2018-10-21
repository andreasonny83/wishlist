import * as React from 'react';

interface IApp {
  name: string;
}

export interface WishlistContextType {
  app: IApp;
}

const context = React.createContext<WishlistContextType | null>(null);

export const WishlistProvider = context.Provider;

export const WishlistConsumer = context.Consumer;
