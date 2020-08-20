export const TOKEN_KEY = '@Nave-Token';
export const isAuthenticated = (): boolean =>
  localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY);
export const login = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};
