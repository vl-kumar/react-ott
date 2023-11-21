import { PageResponse } from "domain/entities";

export interface ContentRepository {
    getContentItems(url: string): Promise<PageResponse>;
}