/// <reference types="react-scripts" />

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg";

declare module "*.svg" {
  const value: string;
  export default value;
}
declare module "uuid";
