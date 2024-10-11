const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function apiRequest(endpoint: string, method: 'POST' | 'GET', body?: any) {
  const token = localStorage.getItem('id_token');  // Assume token is stored after sign-in
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;  // Attach JWT for protected routes
  }

  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export const signUp = async (username: string, password: string) => {
  return apiRequest('auth/signup', 'POST', { username, password });
};

export const signIn = async (username: string, password: string) => {
  return apiRequest('auth/signin', 'POST', { username, password });
};
