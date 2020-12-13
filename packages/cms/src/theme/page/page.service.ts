import { Injectable } from '@nestjs/common';
import { DataService } from '../data/data.service';
import { Page } from '../data/page';

@Injectable()
export class PageService {

  constructor(private dataService: DataService) {}

  // TODO list pages from database or headless cms
  list() {
    return this.dataService.getPages;
  }
  // TODO get page by slug from database or headless cms
  async get(slug: string) {

    const pages: Page[] = await this.dataService.getPages();

    for(const page of pages) {
      console.log(page)
      if(page.slug === slug) {
        return {
          meta: {
            title: page.title,
          },
          page: page,
          router: {
            namespace: 'page-' + page.slug,
          },
        };
      }
    }

  }
}
