const inputToUsername: { [key: string]: string } = {
  mark: 'Mark',
  erin: 'Erin',
  mezbeth: 'Mary Elizabeth',
  'mary elizabeth': 'Mary Elizabeth',
  mary: 'Mary Elizabeth',
  jesse: 'Jesse',
  bailey: 'Bailey',
  amanda: 'Mandy',
  mandy: 'Mandy',
  mandar: 'Mandy',
  will: 'Will',
  lexi: 'Lexi',
  alexis: 'Lexi',
};

const validUsernames = new Set(Object.values(inputToUsername));

export const validateUsername = (input: string): string | undefined => {
  return inputToUsername[input.toLowerCase().trim()];
};

export const isValidUsername = (username: string) => {
  return validUsernames.has(username);
};
