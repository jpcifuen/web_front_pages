const API_URL = 'http://ctr-back-load-594634429.us-east-1.elb.amazonaws.com';

export const fetchFiscalias = async () => {
  const response = await fetch(`${API_URL}/fiscalias`);
  return response.json();
};

export const addFiscalia = async (Nombre, Ubicacion) => {
  await fetch(`${API_URL}/fiscalias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ Nombre, Ubicacion })
  });
};

export const deleteFiscalia = async (id) => {
  await fetch(`${API_URL}/fiscalias/${id}`, {
    method: 'DELETE'
  });
};
