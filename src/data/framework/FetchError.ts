export class FetchError {
  message: string;
  statusCode: number;

  constructor(error: any = {}) {
    this.message = error.message || 'Something went wrong.';
    this.statusCode = error.statusCode || 500;
  }

}
