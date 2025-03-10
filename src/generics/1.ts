// Виконувати ці завдання було вкрай нудно, то ж я розважав себе, як міг.

import axios, { AxiosHeaders } from 'axios';

axios.defaults.baseURL = "https://67b9dbeb51192bd378dea304.mockapi.io/";

type Contact = {
    id: string
    name: string,
    number: string,
    createdAt: string,
}

interface Response {
    data: Contact[],
}

interface AxiosResponse extends Response {
    config: object,
    headers: AxiosHeaders,
    request: XMLHttpRequest,
    status: number,
    statusText: string,
}

async function fetchData<T extends Response>(url: string): Promise<T['data']>  {
  try {
      const response: T = await axios.get(url);
    return response.data;
  } catch (error: unknown) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData<AxiosResponse>("phonebook").then(contacts => console.table(contacts));