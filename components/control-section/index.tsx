import { countryDetail } from "../../dummy";
import CurrencyForm from "../currency-form";

const ControlSection = () => {
  return (
    <div className="flex flex-col">
      <CurrencyForm>
        <CurrencyForm.Dropdown
          fullCurrencyName={countryDetail.fullCurrencyName}
          shortCurrencyName={countryDetail.shorCurrencyName}
        />
      </CurrencyForm>
    </div>
  );
};

export default ControlSection;
