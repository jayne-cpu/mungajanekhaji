function validateUnionType(value: any, allowedTypes: string[]): boolean {
  const type = typeof value;

  for (let i = 0; i < allowedTypes.length; i++) {
    if (type === allowedTypes[i]) {
      return true;
    }
  }

  return false;
}