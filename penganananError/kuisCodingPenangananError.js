// TODO 1
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// TODO 2
function validateNumverInput (a, b, c) {
  if (typeof a !== "number") {
    throw new ValidationError("Argumen pertama harus number");
  }

  if (typeof b !== "number") {
    throw new ValidationError("Argumen kedua harus number");
  }

  if (typeof c !== "number") {
    throw new ValidationError("Argumen ketiga harus number");
  }
};

// TODO 3
function detectTriangle (a, b, c) {
  try {
    validateNumberInput(a, b, c);
  } catch (error) {
    return error.message;
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    return "Nilai argumen tidak boleh negatif atau 0";
  }

  if (a === b && b === c) {
    return "Segitiga sama sisi";
  }

  if (a === b || a === c || b === c) {
    return "Segitiga sama kaki";
  }

  return "Sigitiga sembarang";
  // ysz
};
