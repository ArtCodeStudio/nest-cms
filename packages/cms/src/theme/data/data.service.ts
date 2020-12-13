import { Injectable } from '@nestjs/common';
import { app } from 'src/config';
import { GraphqlClientService } from '../graphql-client/graphql-client.service';
import { Page } from './page';


@Injectable()
export class DataService {

    constructor(private graphqlClient: GraphqlClientService) {}

    getPages(): Promise<Page[]> {
        return this.graphqlClient.client.request(app.graphqlQueries["testQuery"]);
        //return [{title: "Test", color: "fff", content: "Hi", slug: "test"}]
    }
}
