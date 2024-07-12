import { url } from './constants';

export async function fetchAPI(method: string = 'POST', route: string, data: any, uploadFile: boolean = false) {
  let requestConfig: RequestInit = {
    method: method,
    headers: {
      "Content-Type": uploadFile === true ? "multipart/form-data": "application/json"
    }
  };

  if (method === "POST") {
    requestConfig.body = JSON.stringify(data);
  }

  const response = await fetch(`${url || 'http://localhost:3000'}/${route}`, requestConfig);
  if (!response.ok) {
    throw new Error("Failed to fetch API");
  }
  const result = await response.json();
  
  return result;
}
