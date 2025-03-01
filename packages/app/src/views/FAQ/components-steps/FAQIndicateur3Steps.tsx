/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";

import { IconLamp, IconGrow } from "../../../components/Icons";
import FAQStep from "../components/FAQStep";

function FAQIndicateur3Steps() {
  return (
    <Fragment>
      <FAQStep icon={<IconGrow valid={true} />}>
        La notion de promotion correspond au{" "}
        <strong>
          passage à un niveau ou coefficient hierarchique supérieur.
        </strong>
      </FAQStep>

      <FAQStep icon={<IconLamp />}>
        Les groupes ne comportant pas{" "}
        <strong>au moins 10 hommes et 10 femmes</strong> ne sont pas retenus
        pour le calcul
      </FAQStep>

      <FAQStep icon={<IconLamp />}>
        Si le total des effectifs pouvant être pris en compte est inférieur à
        40% des effectifs totaux, l’indicateur n’est pas calculable
      </FAQStep>
    </Fragment>
  );
}

export default FAQIndicateur3Steps;
