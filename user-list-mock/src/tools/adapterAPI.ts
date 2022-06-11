import { ServerResponse } from "http";
import { ServerStreamResponseOptions } from "http2";
import { DeleteUserResponse } from "../services/interfaces/ResponseInterfaces";

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

export const postAPI = async (url: string, body: object) => {
  try {
    const requestParams = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const genericResponseRaw = await fetch(url, requestParams);
    const genericResponse = await genericResponseRaw.json();
    return genericResponse;
  } catch (error) {
    throw error;
  }
};
export const updateAPI = async (url: string, body: object) => {
  try {
    const requestParams = {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const genericResponseRaw = await fetch(url, requestParams);
    const genericResponse = await genericResponseRaw.json();
    return { genericResponseRaw, genericResponse };
  } catch (error) {
    throw error;
  }
};

export const deleteByIdAPI = async (url: string, id: string): Promise<DeleteUserResponse> => {
  try {
    const genericResponseRaw: Response = await fetch(`${url}/${id}`, { method: "DELETE" });
    const genericResponse = await genericResponseRaw.json();
    if (genericResponseRaw.status === 200) return { status: 200, genericResponse, deletedId: id };

    throw new Error("DELETE request does not work");
  } catch (error) {
    throw error;
  }
};
