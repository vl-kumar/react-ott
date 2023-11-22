import { ContentItem } from "domain/entities";
import Header from "presentation/components/molecules/Header";
import SearchContent from "presentation/components/organisms/Search";
import { useAppDispatch } from "presentation/hooks/useAppDispatch";
import { useAppSelector } from "presentation/hooks/useAppSelector";
import { fetchContent } from "presentation/store/slices/Content-Slice";
import {  useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ScrollView } from "./style";


const SearchScreen = () => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [searchResults, setSearchResult] = useState<Array<ContentItem>>([]);
  const dispatch = useAppDispatch();
  const { pageResponse, contentItems } = useAppSelector(
    (state) => state.content
  );

  useEffect(() => {
    dispatch(fetchContent(`/data/page${pageCount}.json`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pageCount > 1) {
      dispatch(fetchContent(`/data/page${pageCount}.json`));
    }
  }, [dispatch, pageCount]);

  function fetchData() {
    if (parseInt(pageResponse.page.totalContentItems) >= contentItems.length) {
      setPageCount(pageCount + 1);
    }
  }

  return (
    <InfiniteScroll
      style={ScrollView.inlineStyle}
      dataLength={contentItems.length}
      next={fetchData}
      hasMore={
        pageResponse?.page?.totalContentItems !== contentItems.length.toString()
      }
      loader={<p>Loading...</p>}
    >
      <Header text={pageResponse?.page?.title ?? ""} />
      <SearchContent
        contentList={contentItems}
        searchResult={searchResults}
        setSearchResult={(result) => {
          setSearchResult(result);
        }}
      />
    </InfiniteScroll>
  );
};

export default SearchScreen;
