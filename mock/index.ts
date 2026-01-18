import { scopeData } from "./data";
import { findChildrenByValue } from "./method";
export default [
  {
    url: `/mock/lazy/scope`,
    method: "post",
    response: ({ body }) => {
      return {
        code: 200,
        obj: findChildrenByValue(scopeData, body.value),
        success: true,
      };
    },
  },
];
