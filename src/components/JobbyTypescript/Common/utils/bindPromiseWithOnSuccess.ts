export const bindPromiseWithOnSuccess = (
  response: Promise<any>,
  onSuccess: (data:any) => void,
  onFailure: (err:any) => void
) => {
  response
    .then((data) => {
      onSuccess(data);
    })
    .catch((err: any) => {
      onFailure(err);
    });
};
