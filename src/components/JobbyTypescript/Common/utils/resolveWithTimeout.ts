export const resolveWithTimeout = (data: any) =>
  new Promise((resolve:(data:any)=>void) => setTimeout(() => resolve(data), 1000));
