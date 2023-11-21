import { ContentDataSource } from "data/data_source";
import { PageResponse } from "domain/entities";
import { ContentRepository } from "domain/repositories";

export class ContentRepositoryImpl implements ContentRepository {
    contentDataFetched: boolean = false;

    contents: PageResponse = {} as PageResponse;
  
    constructor(
      private readonly countryDataSource: ContentDataSource,
    ) {}
    async getContentItems(url: string): Promise<PageResponse> {
        if (!this.contentDataFetched) {
            try {
              this.contents = await this.countryDataSource.getContentItems(url);
              this.contentDataFetched = true;
              return this.contents;
            } catch (error) {
              this.contentDataFetched = false;
              throw error;
            }
          }
          return this.contents;
    }
}