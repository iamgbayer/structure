export class UnexpectedException extends Error {
  constructor(message = "Algo de errado aconteceu. Tente novamente.") {
    super(message);
    this.name = "UnexpectedException";
  }
}
