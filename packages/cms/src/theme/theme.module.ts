import { Module } from '@nestjs/common';
import { PageService } from './page/page.service';
import { PageController } from './page/page.controller';
import { IndexService } from './index/index.service';
import { IndexController } from './index/index.controller';
import { GlobalService } from './global/global.service';

@Module({
  providers: [PageService, IndexService, GlobalService],
  controllers: [PageController, IndexController],
})
export class ThemeModule {}
