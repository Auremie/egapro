/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";

import { IconPeople, IconLamp, IconGrow } from "../../../components/Icons";
import FAQStep from "../components/FAQStep";

function FAQIndicateur4Steps() {
  return (
    <Fragment>
      <FAQStep icon={<IconPeople valid={true} />}>
        Seules les salariées qui sont rentrées de congé maternité (ou
        d’adoption) durant la période de référence sont prises en considération.
      </FAQStep>

      <FAQStep icon={<IconPeople valid={false} />}>
        Les femmes n’étant pas rentrées physiquement de congés maternité (ou
        d’adoption) durant la période de référence ne sont pas prises en
        considération.
      </FAQStep>

      <FAQStep icon={<IconGrow />}>
        Sont considérées <strong>comme augmentées</strong> toutes salariées{" "}
        <strong>revenues de congé maternité</strong> pendant l'année de
        référence et <strong>ayant bénéficié d'une augmentation</strong>{" "}
        (générale ou individuelle){" "}
        <strong>à leur retour avant la fin de cette même période.</strong>
      </FAQStep>

      <FAQStep icon={<IconLamp />}>
        <p>L’indicateur ne peut pas être calculé :</p>
        <ul css={styles.list}>
          <li>
            • s'il n'y a pas eu des retours de congé maternité (ou adoption) durant
            la période de référence
          </li>
          <li>
            • s'il n'y a pas eu des augmentations (individuelles ou collectives)dans l'entreprise au
            cours de ces congés maternité
          </li>
        </ul>
      </FAQStep>
    </Fragment>
  );
}

const styles = {
  list: css({
    padding: 0,
    margin: 0,
    listStyle: "none",
    marginTop: 6
  })
};

export default FAQIndicateur4Steps;
