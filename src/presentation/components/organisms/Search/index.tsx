import React, { memo, useEffect, useMemo } from "react";
import { ContentItem } from "domain/entities";
import Content from "presentation/components/molecules/Content";
import { ContentGrid, MainContainer } from "./style";
import { useAppSelector } from "presentation/hooks/useAppSelector";
import NoSearchResults from "presentation/components/molecules/NoSearchResults";

interface SearchContentProps {
  contentList: Array<ContentItem>;
  searchResult: Array<ContentItem>;
  setSearchResult: (searchResult: Array<ContentItem>) => void;
}

const SearchContent: React.FC<SearchContentProps> = memo(({
  contentList,
  searchResult,
  setSearchResult,
}) => {
  const { searchTerm } = useAppSelector((state) => state.search);
  
  useEffect(() => {
    if (searchTerm.length < 3) {
      return;
    }
    const result = contentList.filter((content) => {
      return content.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResult(result);
  }, [searchTerm]);

  const showContentList = useMemo(()=>{
    return searchTerm.length < 3 && contentList.length > 0 
  },[searchTerm, contentList])

  const showSearchResults = useMemo(()=>{
    return searchTerm.length > 2 && searchResult.length > 0 
  },[searchTerm, searchResult])

  const showNoSearchResults = useMemo(()=>{
    return searchTerm.length > 0 && searchResult.length === 0
  },[searchTerm, searchResult])

  return (
    <MainContainer>
      <ContentGrid>
        {showContentList &&
          contentList.map((content: ContentItem, index: number) => (
            <Content key={`${index}-${content.name}`} content={content} />
          ))}
        {showSearchResults &&
          searchResult.map((content: ContentItem, index: number) => (
            <Content key={`${index}-${content.name}`} content={content} />
          ))}
      </ContentGrid>
      {showNoSearchResults && <NoSearchResults />}
    </MainContainer>
  );
});

export default SearchContent;
