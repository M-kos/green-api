import { createContext } from 'react';
import type { ApiContextData } from './types.ts';

export const ApiContext = createContext<ApiContextData | null>(null);
