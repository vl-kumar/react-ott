import { memo } from "react";
import { TextView } from "./style";

interface ContentTextProps {
  text: string;
}
const ContentText: React.FC<ContentTextProps> = memo(({ text }) => {
  return <TextView>{text}</TextView>;
});

export default ContentText;
