export const pascalCaseTransformer = (data: Record<string, any>[]) => {
  return data.map(el => transform(el))
}

const transform = (data: Record<string, any>): Record<string, any> => {
  const transformedData: Record<string, any> = {};
Object.keys(data).forEach((key) => {
  const transformedKey = convertToPascalCase(key);
  transformedData[transformedKey] = data[key];
});
return transformedData;
}

const convertToPascalCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, match) => match.toUpperCase());
}
