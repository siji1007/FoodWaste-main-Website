// MockAuthService.ts

class MockAuthService {
  static login(email: string, password: string): boolean {
    // For testing purposes, let's check if the provided credentials match the default ones
    return email === 'ADMIN' && password === 'ADMIN';
    
  }
}

export default MockAuthService;
