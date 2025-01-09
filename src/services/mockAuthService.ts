// Mock admin user for development
const MOCK_ADMIN = {
  id: '1',
  email: 'admin@example.com',
  password: 'admin123!',
  role: 'admin' as const,
  name: 'Admin User'
};

export async function mockLogin(email: string, password: string) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (email === MOCK_ADMIN.email && password === MOCK_ADMIN.password) {
    return {
      user: {
        id: MOCK_ADMIN.id,
        email: MOCK_ADMIN.email,
        role: MOCK_ADMIN.role,
        name: MOCK_ADMIN.name
      },
      token: 'mock-jwt-token'
    };
  }

  throw new Error('Invalid credentials');
}

export async function mockGetUser() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    id: MOCK_ADMIN.id,
    email: MOCK_ADMIN.email,
    role: MOCK_ADMIN.role,
    name: MOCK_ADMIN.name
  };
}
