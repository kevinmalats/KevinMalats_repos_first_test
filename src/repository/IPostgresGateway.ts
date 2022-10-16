
export interface IPostgresGateway {
   getItems(query: string ): Promise<object[]>
   createOrUpdateItem(query: string, values:object[]): Promise<boolean>
}