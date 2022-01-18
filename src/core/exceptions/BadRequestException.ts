export class BadRequestException extends Error {
  constructor(message = "Falha ao realizar operação, tente novamente!") {
    super(message);
    this.name = "BadRequestException";
  }
}
