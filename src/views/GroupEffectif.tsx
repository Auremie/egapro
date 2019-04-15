/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { RouteComponentProps } from "react-router-dom";
import { TranchesAges, Groupe, GroupTranchesAges } from "../globals.d";

import useField, { stateFieldType } from "../hooks/useField";
import RowTrancheAge from "../components/RowTrancheAge";
import Button from "../components/Button";

import { displayNameCategorieSocioPro } from "../utils/helpers";

interface Props extends RouteComponentProps {
  effectif: Groupe;
  updateEffectif: (group: Groupe) => void;
}

interface GroupeTrancheAgeFields {
  trancheAge: TranchesAges;
  nbSalarieFemmeField: stateFieldType;
  nbSalarieHommeField: stateFieldType;
}

function GroupEffectif({ effectif, updateEffectif, history }: Props) {
  const allFields: Array<GroupeTrancheAgeFields> = effectif.tranchesAges.map(
    ({
      trancheAge,
      nombreSalariesFemmes,
      nombreSalariesHommes
    }: GroupTranchesAges) => {
      return {
        trancheAge,
        nbSalarieFemmeField: useField(
          "nombreSalariesFemmes" + trancheAge,
          nombreSalariesFemmes === undefined ? "" : String(nombreSalariesFemmes)
        ),
        nbSalarieHommeField: useField(
          "nombreSalariesHommes" + trancheAge,
          nombreSalariesHommes === undefined ? "" : String(nombreSalariesHommes)
        )
      };
    }
  );

  const saveGroup = () => {
    const newGroup: Groupe = {
      ...effectif,
      tranchesAges: effectif.tranchesAges.map(
        (groupTranchesAges: GroupTranchesAges) => {
          const fields = allFields.find(
            fields => fields.trancheAge === groupTranchesAges.trancheAge
          );
          if (!fields) {
            return groupTranchesAges;
          }
          return {
            ...groupTranchesAges,
            nombreSalariesFemmes:
              fields.nbSalarieFemmeField.input.value === ""
                ? undefined
                : parseInt(fields.nbSalarieFemmeField.input.value, 10),
            nombreSalariesHommes:
              fields.nbSalarieHommeField.input.value === ""
                ? undefined
                : parseInt(fields.nbSalarieHommeField.input.value, 10)
          };
        }
      )
    };
    updateEffectif(newGroup);
    const nextRoute =
      effectif.categorieSocioPro < 3
        ? `/effectifs/${effectif.categorieSocioPro + 1}`
        : "/groupvalid";
    history.push(nextRoute);
  };

  return (
    <div>
      <div css={styles.bloc}>
        <p css={styles.blocTitle}>
          Nombre de salarié -{" "}
          {displayNameCategorieSocioPro(effectif.categorieSocioPro)}
        </p>

        <div css={styles.row}>
          <div css={styles.cellHead}>tranche d'âge</div>
          <div css={styles.cell}>femmes</div>
          <div css={styles.cell}>hommes</div>
        </div>

        {allFields.map(
          ({
            trancheAge,
            nbSalarieFemmeField,
            nbSalarieHommeField
          }: GroupeTrancheAgeFields) => {
            return (
              <RowTrancheAge
                key={trancheAge}
                trancheAge={trancheAge}
                calculable={true}
                femmesField={nbSalarieFemmeField}
                hommesField={nbSalarieHommeField}
              />
            );
          }
        )}

        <Button onClick={saveGroup} label="Valider" />
      </div>
    </div>
  );
}

const styles = {
  bloc: css({
    display: "flex",
    flexDirection: "column",
    maxWidth: 800,
    padding: "12px 24px",
    margin: "24px auto",
    backgroundColor: "white",
    borderRadius: 6,
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)"
  }),
  blocTitle: css({
    fontSize: 24,
    paddingTop: 6,
    paddingBottom: 24,
    color: "#353535",
    textAlign: "center"
  }),
  row: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 24
  }),
  cellHead: css({
    flexGrow: 1,
    flexBasis: "0%",
    textAlign: "right",
    fontWeight: "bold"
  }),
  cell: css({
    flexGrow: 2,
    flexBasis: "0%",
    marginLeft: 24,
    textAlign: "center",
    fontWeight: "bold"
  })
};

export default GroupEffectif;
