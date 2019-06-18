/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link, LinkProps } from "react-router-dom";

import globalStyles from "../utils/globalStyles";

interface Props {
  label: string;
  to: LinkProps["to"];
}

function TextLink({ label, to }: Props) {
  return (
    <Link to={to} css={styles.link}>
      {label}
    </Link>
  );
}

const styles = {
  link: css({
    color: globalStyles.colors.default,
    textDecoration: "underline"
  })
};

export default TextLink;
