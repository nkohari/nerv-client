declare module '*.svg' {
  const SVG: any;
  export default SVG;
}

declare interface FetchError extends Error {
  statusCode: number;
}