import validator from "validator";
export default function checkValid(text) {
  if (!Number(text)) {
    return validator.isDate(validator.toDate(text.toLowerCase()));
  }
}
