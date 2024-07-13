import { url } from './constants';

export async function fetchAPI(method: string = 'POST', route: string, data: any, uploadFile: boolean = false) {
  let headers: { [key: string]: string } = {};

  if (!uploadFile) {
    headers["Content-Type"] = "application/json";
  }

  let requestConfig: RequestInit = {
    method: method,
    headers: new Headers(headers)
  };

  if (method === "POST") {
    requestConfig.body = uploadFile ? data : JSON.stringify(data);
  }

  const response = await fetch(`http://localhost:4000/${route}`, requestConfig);
  if (!response.ok) {
    throw new Error("Failed to fetch API");
  }
  const result = await response.json();

  return result;
}