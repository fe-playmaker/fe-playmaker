export const returnAfterTime =
  <T>(data: T, miliseconds: number) =>
  () =>
    new Promise<T>(resolve => {
      setTimeout(() => {
        resolve(data)
      }, miliseconds)
    })
