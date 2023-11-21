import { ContentItem } from "domain/entities";
import ContentText from "presentation/components/atoms/ContentText";
import React from "react";
import { CardContainer } from "./style";
import ContentImage from "presentation/components/atoms/ContentImage";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://test.create.diagnal.com/images/placeholder_for_missing_posters.png";

interface ContentProps {
  content: ContentItem;
}
const Content: React.FC<ContentProps> = ({ content }) => {
  const imageBaseUrl = "https://test.create.diagnal.com/images/";
  const posterUrl = imageBaseUrl + content.posterImage;

  return (
    <CardContainer>
      <ContentImage url={posterUrl} />
      <ContentText text={content.name} />
    </CardContainer>
  );
};

export default Content;
