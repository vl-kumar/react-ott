import React, { useState } from "react";
import { ContentItem } from "domain/entities";
import Content from "presentation/components/molecules/Content";
import { ContentGrid } from "./style";

interface SearchContentProps {
  contentList: Array<ContentItem>;
}

const SearchContent: React.FC<SearchContentProps> = ({ contentList }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e: any) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e: any) => {
    e.preventDefault();
    // props.search(searchValue);
    resetInputField();
  };

 

  return (
    <div>
      {/* <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form> */}
      <ContentGrid>
        {contentList.length > 0 &&
          contentList.map((content: ContentItem, index: number) => (
            <Content key={`${index}-${content.name}`} content={content} />
          ))}
      </ContentGrid>
    </div>
  );
};

export default SearchContent;
