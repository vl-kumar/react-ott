import { useAppSelector } from "presentation/hooks/useAppSelector";
import { Container, ImageView, SubTextView, TextView } from "./style";
import NoResult from "assets/no-result.png";
import { memo } from "react";
const NoSearchResults = memo(() => {
  const { searchTerm } = useAppSelector((state) => state.search);
  return (
    <Container>
      <ImageView src={NoResult} />
      <TextView>Couldn't find {searchTerm}</TextView>
      <SubTextView>Try searching for somthing else pr try with a different spelling</SubTextView>
    </Container>
  );
});

export default NoSearchResults;
