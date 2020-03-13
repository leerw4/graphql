export class ReturnTypeCannotBeResolvedError extends Error {
  constructor(hostTypeName: string) {
    super(
      `Return type for "${hostTypeName}" cannot be resolved. If you did not pass a custom implementation (the "resolveType" function), you must return an instance of a class instead of a plain JavaScript object.`,
    );
  }
}
