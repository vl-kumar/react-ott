import { PageResponse } from "domain/entities";

export interface ContentDataSource {
    getContentItems(url:string): Promise<PageResponse>;
}
