import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request'

@Injectable()
export class GraphqlClientService {
    
    public readonly client: GraphQLClient = new GraphQLClient("localhost:1234")
}
