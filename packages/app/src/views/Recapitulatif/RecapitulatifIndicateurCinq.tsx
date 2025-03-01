/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";

import { FormState } from "../../globals.d";

import TextLink from "../../components/TextLink";
import InfoBloc from "../../components/InfoBloc";
import RecapBloc from "./components/RecapBloc";

interface Props {
  indicateurCinqFormValidated: FormState;
  indicateurSexeSousRepresente: "hommes" | "femmes" | "egalite" | undefined;
  indicateurNombreSalariesSexeSousRepresente: number | undefined;
  noteIndicateurCinq: number | undefined;
}

function RecapitulatifIndicateurCinq({
  indicateurCinqFormValidated,
  indicateurSexeSousRepresente,
  indicateurNombreSalariesSexeSousRepresente,
  noteIndicateurCinq
}: Props) {
  if (indicateurCinqFormValidated !== "Valid") {
    return (
      <div css={styles.container}>
        <InfoBloc
          title="Indicateur 5, nombre de salariés du sexe sous-représenté parmi les 10 plus hautes rémunérations"
          text={
            <Fragment>
              <span>
                Nous ne pouvons pas calculer votre indicateur car vous n’avez
                pas encore validé vos données saissies.
              </span>{" "}
              <TextLink to="/indicateur1" label="valider les données" />
            </Fragment>
          }
        />
      </div>
    );
  }

  const firstLineInfo =
    indicateurSexeSousRepresente === undefined
      ? undefined
      : indicateurSexeSousRepresente === "egalite"
      ? "les hommes et les femmes sont à parité"
      : indicateurSexeSousRepresente === "hommes"
      ? "les femmes sont sur-représentées"
      : "les hommes sont sur-représentés";

  return (
    <div css={styles.container}>
      <RecapBloc
        title="Indicateur 5, nombre de salariés du sexe sous-représenté parmi les 10 plus hautes rémunérations"
        resultBubble={{
          firstLineLabel: "votre résultat final est",
          firstLineData:
            indicateurNombreSalariesSexeSousRepresente !== undefined
              ? String(indicateurNombreSalariesSexeSousRepresente)
              : "--",
          firstLineInfo,
          secondLineLabel: "votre note obtenue est",
          secondLineData:
            (noteIndicateurCinq !== undefined ? noteIndicateurCinq : "--") +
            "/10",
          indicateurSexeSurRepresente:
            indicateurSexeSousRepresente === undefined
              ? undefined
              : indicateurSexeSousRepresente === "hommes"
              ? "femmes"
              : "hommes"
        }}
      >
        {null}
      </RecapBloc>
    </div>
  );
}

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    marginTop: 22,
    marginBottom: 22
  })
};

export default RecapitulatifIndicateurCinq;
