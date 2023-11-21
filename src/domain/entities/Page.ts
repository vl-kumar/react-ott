import { Content } from "./Content";

export type Page = {
    title: string,
    totalContentItems: string,
    pageNumRequested: string,
    pageSizeRequested: string,
    pageSizeReturned: string,
    contentItems: Content,
}

export type PageResponse = {
    page: Page
}