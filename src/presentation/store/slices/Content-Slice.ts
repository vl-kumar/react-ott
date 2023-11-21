import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContentDataSourceImpl } from "data/data_source";
import { ContentRepositoryImpl } from "data/repositories";
import { ContentItem, PageResponse } from "domain/entities";
import { GetContentItems } from "domain/usecases";

export const fetchContent = createAsyncThunk(
  "fetchContent",
  async (url: string) => {
    const contentDataSource = new ContentDataSourceImpl();
    const repository = new ContentRepositoryImpl(contentDataSource);
    const getContentItemsUseCase = new GetContentItems(repository, url);
    const response = await getContentItemsUseCase.execute();
    let responseString = await JSON.stringify(response).replace(
      /-([a-z])/g,
      function (g) {
        return g[1].toUpperCase();
      }
    );
    return JSON.parse(responseString);
  }
);

interface ContentState {
  pageResponse: PageResponse;
  contentItems: Array<ContentItem>;
  isLoading: boolean;
  error: any;
}

const initialState = {
  pageResponse: {} as PageResponse,
  contentItems: [],
  isLoading: false,
  error: null,
} as ContentState;

const contentSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pageResponse = {
        page: {
          ...action.payload.page,
          contentItems: {
            content: [
              ...state.contentItems,
              ...action.payload.page.contentItems.content,
            ],
          },
        },
      };
      state.contentItems = [
        ...state.contentItems,
        ...action.payload.page.contentItems.content,
      ];
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export default contentSlice.reducer;
