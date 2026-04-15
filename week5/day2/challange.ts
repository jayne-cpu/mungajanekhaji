function validateUnionType(value: any, allowedTypes: string[]): boolean {
  const valueType = typeof value;

  for (let i = 0; i < allowedTypes.length; i++) {
    if (valueType === allowedTypes[i]) {
      return true;
    }
  }

  return false;
}