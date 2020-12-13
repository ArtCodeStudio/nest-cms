import { Module } from '@nestjs/common';
import { PageService } from './page/page.service';
import { PageController } from './page/page.controller';
import { IndexService } from './index/index.service';
import { IndexController } from './index/index.controller';
import { GlobalService } from './global/global.service';
import { LinkListService } from './link-list/link-list.service';
import { GraphqlClientService } from './graphql-client/graphql-client.service';
import { DataService } from './data/data.service';

@Module({
  providers: [PageService, IndexService, GlobalService, LinkListService, GraphqlClientService, DataService],
  controllers: [PageController, IndexController],
})
export class ThemeModule {}
