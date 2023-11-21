import HeaderText from "presentation/components/atoms/HeaderText";
import {
  BackIcon,
  HeaderBackground,
  HeaderContainer,
  HeaderLeftRow,
  HeaderRow,
  SearchIcon,
} from "./style";
interface HeaderProps {
  text: string;
}
const Header = (props: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderBackground
        alt={"Header Background"}
        src={"https://test.create.diagnal.com/images/nav_bar.png"}
      />
      <HeaderRow>
        <HeaderLeftRow>
          <BackIcon src={"https://test.create.diagnal.com/images/Back.png"} />
          <HeaderText text={props.text} />
        </HeaderLeftRow>
        <SearchIcon src={"https://test.create.diagnal.com/images/search.png"} />
      </HeaderRow>
    </HeaderContainer>
  );
};

export default Header;
