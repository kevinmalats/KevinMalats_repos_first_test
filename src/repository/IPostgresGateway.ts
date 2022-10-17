
export interface IPostgresGateway {
   getItems(query: string, values:object[] | number[] | undefined ): Promise<object[]>
   createOrUpdateItem(query: string, values:object[]): Promise<boolean>
   deleteItem(query: string, values:number[]): Promise<boolean>
}