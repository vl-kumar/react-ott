import { memo } from "react";
import { ImageView } from "./style";

interface ContentImageProps {
  url: string;
}
const ContentImage: React.FC<ContentImageProps> = memo(({ url }) => {
  const placeholderImageUrl =
    "https://test.create.diagnal.com/images/placeholder_for_missing_posters.png";

  return (
    <ImageView
      src={url ?? placeholderImageUrl}
      alt={"Content Image"}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = placeholderImageUrl
      }}
    />
  );
});

export default ContentImage;
