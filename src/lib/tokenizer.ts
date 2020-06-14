export function tokenize(text: string) {
  return text.replace(/\(/g, "( ").replace(/\)/g, " )").split(/\s+/);
}
