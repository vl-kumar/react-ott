import HeaderText from "presentation/components/atoms/HeaderText";
import {
  BackIcon,
  HeaderBackground,
  HeaderContainer,
  HeaderLeftRow,
  HeaderRow,
  SearchIcon,
  SearchInput,
} from "./style";
import { useAppDispatch } from "presentation/hooks/useAppDispatch";
import {
  clean,
  search,
  toggleSearchMode,
} from "presentation/store/slices/Search-slice";
import { useAppSelector } from "presentation/hooks/useAppSelector";
import { useEffect, useState } from "react";
import useDebounce from "presentation/hooks/useDebounce";
interface HeaderProps {
  text: string;
}
const Header: React.FC<HeaderProps> = ({ text }) => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { isSearchMode } = useAppSelector((state) => state.search);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  function resetSearch() {
    setSearchTerm('')
    dispatch(toggleSearchMode({ isSearchMode: false }));
    dispatch(clean());
  }

  useEffect(() => {
    dispatch(search({ searchTerm: debouncedSearchTerm }));
  }, [debouncedSearchTerm, dispatch]);

  const handleSearchInputChanges = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <HeaderContainer>
      <HeaderBackground
        alt={"Header Background"}
        src={"https://test.create.diagnal.com/images/nav_bar.png"}
      />
      <HeaderRow>
        <HeaderLeftRow>
          <BackIcon
            onClick={resetSearch}
            src={"https://test.create.diagnal.com/images/Back.png"}
          />
          {!isSearchMode && <HeaderText text={text} />}
          {isSearchMode && (
            <SearchInput
              id="search"
              value={searchTerm}
              onChange={handleSearchInputChanges}
              type="search"
            />
          )}
        </HeaderLeftRow>
        {!isSearchMode && (
          <SearchIcon
            src={"https://test.create.diagnal.com/images/search.png"}
            onClick={() => {
              dispatch(toggleSearchMode({ isSearchMode: true }));
            }}
          />
        )}
      </HeaderRow>
    </HeaderContainer>
  );
};

export default Header;
