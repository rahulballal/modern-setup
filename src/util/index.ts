export const toNormalCase = (txt?: string) => {
  if (txt) {
    return txt[0].toUpperCase() + txt.substr(1, txt.length).toLowerCase();
  }
  return "";
};

export const toDisplayLabel = (key: string) => {
  const [first, second] = key.split("_");

  if (!second) {
    return toNormalCase(first);
  }
  return `${toNormalCase(first)} ${toNormalCase(second)}`.trimEnd();
};
