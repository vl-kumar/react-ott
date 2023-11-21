import { PageResponse } from "../entities/Page";
import { ContentRepository } from "../repositories";
import { UseCase } from "./UseCase";

export class GetContentItems implements UseCase<PageResponse> {

  constructor(private readonly repository: ContentRepository, private readonly url: string) {}

  execute(): Promise<PageResponse> {
    return this.repository.getContentItems(this.url);
  }
}
