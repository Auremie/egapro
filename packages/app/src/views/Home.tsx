/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { RouteComponentProps } from "react-router-dom";

import Page from "../components/Page";
import ButtonLink from "../components/ButtonLink";

function Home(props: RouteComponentProps) {
  return (
    <Page
      title="Bienvenue sur Egapro"
      tagline="L’index de l’égalité a été conçu pour faire progresser au sein des entreprises l’égalité entre les hommes et les femmes. Il permet de mesurer où en sont les entreprises sur le sujet, mettre en évidence leurs points de progression et mettre en œuvre les mesures correctives nécessaires. en savoir plus L’outil EgaPro permet aux entreprises de calculer leur index d’égalité professionnelle de façon simple, rapide et en profitant d’une aide en ligne sur les détails du calcul de chaque indicateur et sur les questions les plus fréquemment posées."
    >
      <div css={styles.action}>
        <ButtonLink to="/simulateur" label="commencer la simulation" />
      </div>
    </Page>
  );
}

const styles = {
  action: css({
    display: "flex",
    flexDirection: "row"
  })
};

export default Home;
