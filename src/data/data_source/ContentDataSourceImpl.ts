import apiClient, {HTTP_OK} from '../api';
import { PageResponse } from 'domain/entities';
import { ContentDataSource } from './ContentDataRource';

export class ContentDataSourceImpl implements ContentDataSource {
  async getContentItems(url: string): Promise<PageResponse> {
    try {
      const result = await apiClient.get(url);
      if (result.status === HTTP_OK) {
        const contents: PageResponse = result.data;
        return contents;
      } else {
        throw Error(`API failed with error code ${result.status}`);
      }
    } catch (error) {
      throw error;
    }
  }
}
