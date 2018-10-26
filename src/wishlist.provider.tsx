import * as React from 'react';

interface IApp {
  name: string;
}

export interface IWishlistContextType {
  app: IApp;
}

const context = React.createContext<IWishlistContextType | null>(null);

export const WishlistProvider = context.Provider;

export const WishlistConsumer = context.Consumer;
