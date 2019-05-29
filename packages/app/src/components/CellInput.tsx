/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import MaskedInput, { conformToMask } from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { FieldRenderProps } from "react-final-form-hooks";

import globalStyles from "../utils/globalStyles";

import { Cell } from "./Cell";

export const hasFieldError = (meta: FieldRenderProps["meta"]) =>
  (meta.error && meta.submitFailed) ||
  (meta.error && meta.touched && meta.error.mustBeNumber);

const numberMask = createNumberMask({
  prefix: "",
  thousandsSeparatorSymbol: " "
});

const suffixPercent = "%";

const percentNumberMask = createNumberMask({
  prefix: "",
  thousandsSeparatorSymbol: " ",
  suffix: suffixPercent,
  allowDecimal: true
});

const parse = (inputValue: string) => {
  return inputValue
    .split(/\s/)
    .join("")
    .replace(suffixPercent, "");
};

interface Props {
  field: FieldRenderProps;
  mask?: "number" | "percent" | undefined;
  style?: any;
}

function CellInput({
  field: {
    input: { value, onChange, ...inputProps },
    meta
  },
  mask,
  style
}: Props) {
  const error = hasFieldError(meta);

  const maskToUse = mask === "percent" ? percentNumberMask : numberMask;
  const inputValue = conformToMask(value, maskToUse, {}).conformedValue;

  return (
    <Cell style={styles.cell}>
      {mask ? (
        <MaskedInput
          mask={maskToUse}
          css={[styles.input, style, error && styles.inputError]}
          autoComplete="off"
          value={error && !meta.active ? "erreur" : inputValue}
          onChange={event =>
            onChange({
              target: {
                value: parse(event.target.value)
              }
            })
          }
          {...inputProps}
        />
      ) : (
        <input
          css={[styles.input, style, error && styles.inputError]}
          autoComplete="off"
          value={error && !meta.active ? "erreur" : value}
          onChange={onChange}
          {...inputProps}
        />
      )}
    </Cell>
  );
}

const styles = {
  cell: css({
    height: 22,
    display: "flex"
  }),
  input: css({
    appearance: "none",
    border: `solid ${globalStyles.colors.default} 1px`,
    width: "100%",
    fontSize: 14,
    textAlign: "center"
  }),
  inputError: css({
    color: globalStyles.colors.error,
    borderColor: globalStyles.colors.error
  })
};

export default CellInput;
