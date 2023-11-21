import { TextView } from "./style";

interface HeaderTextProps {
  text: string;
}
const HeaderText: React.FC<HeaderTextProps> = ({ text }) => {
  return <TextView>{text}</TextView>;
};

export default HeaderText;
