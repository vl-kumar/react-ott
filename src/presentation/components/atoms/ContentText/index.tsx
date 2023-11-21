import { TextView } from "./style";

interface ContentTextProps {
  text: string;
}
const ContentText: React.FC<ContentTextProps> = ({ text }) => {
  return <TextView>{text}</TextView>;
};

export default ContentText;
