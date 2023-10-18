export const authHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'X-Client-Id': '31334466',
  };
};

export const postHeaders = (authToken: string) => {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };
};
