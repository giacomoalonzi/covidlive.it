export const noop = () => {}
export const delay = (time: number): Promise<any> => new Promise(resolve => setTimeout(resolve, time))
