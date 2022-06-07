export const getAPI = async (url: string, ...params: string[]): Promise<any> => {
  try {
    // TODO: make request to with parameters.
    const genericResponseRaw = await fetch(url);
    const genericResponse = await genericResponseRaw.json();
    return genericResponse;
  } catch (error) {
    throw error;
  }
};
