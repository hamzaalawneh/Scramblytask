export const validateEmail = (email: string): {error: string} => {
  if (!email) {
    return {error: 'Email is required'};
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {error: 'Please enter a valid email address'};
  }

  return {error: ''};
};

export const validateRequiredFields = (fields: string[]): boolean => {
  return fields.every(field => field.trim().length > 0);
};
