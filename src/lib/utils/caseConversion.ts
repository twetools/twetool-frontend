// Utility to convert object keys to camelCase
export function toCamelCaseKey(key: string): string {
  return key.charAt(0).toLowerCase() + key.slice(1);
}

export function mapKeysToCamelCase(obj: any): any {
  if (Array.isArray(obj)) return obj.map(mapKeysToCamelCase);
  if (obj && typeof obj === "object") {
    const mapped: any = {};
    for (const [k, v] of Object.entries(obj)) {
      if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
      const camelKey = toCamelCaseKey(k);
      mapped[camelKey] = mapKeysToCamelCase(v);
    }
    return mapped;
  }
  return obj;
}
