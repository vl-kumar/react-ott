import React, { useEffect } from "react";
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

const SearchContent: React.FC<SearchContentProps> = ({
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

  return (
    <MainContainer>
      <ContentGrid>
        {searchTerm.length < 3 &&
          contentList.length > 0 &&
          contentList.map((content: ContentItem, index: number) => (
            <Content key={`${index}-${content.name}`} content={content} />
          ))}
        {searchTerm.length > 2 &&
          searchResult.length > 0 &&
          searchResult.map((content: ContentItem, index: number) => (
            <Content key={`${index}-${content.name}`} content={content} />
          ))}
      </ContentGrid>
      {searchTerm.length > 0 && searchResult.length === 0 && <NoSearchResults />}
    </MainContainer>
  );
};

export default SearchContent;
