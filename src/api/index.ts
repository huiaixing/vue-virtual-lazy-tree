import axios from "axios";

export function getSubScope(value: any) {
  return axios.post("/mock/lazy/scope", {
    value: value,
  });
}
