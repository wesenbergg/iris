import { FC, ReactNode } from "react";

const Fieldset: FC<{ legend: string; children: ReactNode }> = ({
  legend,
  children,
}) => (
  <fieldset className="border shadow rounded-xl p-4 space-y-4">
    <legend>{legend}</legend>
    {children}
  </fieldset>
);

export default Fieldset;
