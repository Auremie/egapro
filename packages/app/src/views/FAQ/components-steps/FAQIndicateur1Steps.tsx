/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";

import { IconLamp, IconText, IconMoney } from "../../../components/Icons";
import FAQStep from "../components/FAQStep";

function FAQIndicateur1Steps() {
  return (
    <Fragment>
      <FAQStep icon={<IconText>ETP</IconText>}>
        La rémunériation doit être reconstituée en{" "}
        <strong>équivalent temps pleins</strong> sur toute la durée de la
        période de référence
      </FAQStep>

      <FAQStep icon={<IconMoney valid={true} />}>
        <p>
          <strong>Doivent être pris en compte dans la rémunération :</strong>
        </p>
        <ul css={styles.list}>
          <li>
            • les "bonus", les commissions sur produits, les primes d’objectif
            liées aux performances individuelles du salarié, variables d’un
            individu à l’autre pour un même poste.
          </li>
          <li>
            • les primes collectives (prime de transport ou prime de vacances).
          </li>
        </ul>
      </FAQStep>

      <FAQStep icon={<IconMoney valid={false} />}>
        <p>
          <strong>
            Ne doivent pas être pris en compte dans la rémunération
          </strong>
        </p>
        <ul css={styles.list}>
          <li>
            • les primes liées à une sujétion particulière qui ne concernent pas
            la personne du salarié (prime de froid, prime de nuit etc.)
          </li>
          <li>• les heures supplémentaires et complémentaires</li>
          <li>• les indemnités de licenciement</li>
          <li>• les indemnités de depart en retraite</li>
          <li>• les primes d’ancienneté</li>
          <li>• les primes d’interessement et de participation</li>
        </ul>
      </FAQStep>

      <FAQStep icon={<IconLamp />}>
        Les groupes ne comportant pas{" "}
        <strong>au moins 3 hommes et 3 femmes</strong> ne doivent pas être
        retenus pour le calcul.
      </FAQStep>

      <FAQStep icon={<IconLamp />}>
        Si le total des effectifs pouvant être pris en compte est inférieur à
        40% des effectifs totaux, l’indicateur n’est pas calculable
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

export default FAQIndicateur1Steps;
