export function generateRandomPassword(length: number = 12): string {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*';
  
  const allChars = uppercase + lowercase + numbers + symbols;
  
  // Use cryptographically secure random
  const getRandomChar = (chars: string): string => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return chars[array[0] % chars.length];
  };
  
  let password = '';
  // Ensure at least one of each type
  password += getRandomChar(uppercase);
  password += getRandomChar(lowercase);
  password += getRandomChar(numbers);
  password += getRandomChar(symbols);
  
  // Fill the rest randomly
  for (let i = password.length; i < length; i++) {
    password += getRandomChar(allChars);
  }
  
  // Shuffle securely using Fisher-Yates with crypto.getRandomValues
  const arr = password.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const j = array[0] % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  return arr.join('');
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
