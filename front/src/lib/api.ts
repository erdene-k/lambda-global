import { url } from './constants';

export async function fetchAPI(method: string = 'POST', route: string, data: any) {
  let requestConfig: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json"
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
