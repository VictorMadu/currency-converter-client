import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux";
import { setAlertStart } from "../../redux/alert/alert.actions";
import { selectCurrencyPairsObj } from "../../redux/currency/currency.selectors";
import { selectUserToken } from "../../redux/user/user.selectors";
import CurrencyPair from "../currency-pair";
import ModalRoot from "../modal-root";

interface ISetAlertModalProps {
  baseCurrency: string;
  quotaCurrency: string;
  onClose: () => void;
}

const SetAlertModal = (props: ISetAlertModalProps) => {
  const userToken = useAppSelector(selectUserToken);
  const currencyPairsObj = useAppSelector(selectCurrencyPairsObj);
  const currPrice = (
    currencyPairsObj[props.quotaCurrency as string]?.curr_rate ??
    0 / currencyPairsObj[props.baseCurrency as string]?.curr_rate ??
    1
  ).toFixed(6);
  const [value, setValue] = useState(currPrice);
  const dispatch = useAppDispatch();

  return (
    <ModalRoot>
      <div
        className={
          "absolute w-full h-full top-0 left-0  bg-black/40 px-5 sm:px-0"
        }
      >
        <div className="mt-[15%] mx-auto bg-neutral-100 w-full sm:w-[500px] rounded-lg overflow-hidden space-y-6">
          <div className="flex items-center justify-between px-5 py-3">
            <p className="font-bold text-neutral-900/90 text-lg">Set Alert</p>
            <button className="text-2xl" onClick={props.onClose}>
              &times;
            </button>
          </div>
          <div className="flex justify-between px-5 pb-5">
            <CurrencyPair
              baseFlag={""}
              quotaFlag={""}
              baseAbbrev={props.baseCurrency}
              quotaAbbrev={props.quotaCurrency}
            />
            <input
              className="w-1/3 focus:outline-none shadow-inner bg-neutral-300 rounded px-1.5 py-1"
              type="number"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
          <div className="flex justify-end gap-x-2 bg-neutral-200 px-5 py-3">
            <button
              className="px-3 py-1 text-neutral-900/70 cursor-pointer"
              onClick={props.onClose}
            >
              Cancel
            </button>
            <button
              className="px-3 py-0.5 rounded bg-neutral-700 text-white cursor-pointer"
              onClick={() => {
                dispatch(
                  setAlertStart(
                    {
                      token: userToken,
                      base: props.baseCurrency,
                      quota: props.quotaCurrency,
                      targetRate: parseFloat(value),
                    },
                    (success) => {
                      if (alert)
                        success
                          ? alert(
                              "Successful set on " +
                                props.baseCurrency +
                                "/" +
                                props.quotaCurrency
                            )
                          : alert(
                              "Failed setting alert on " +
                                props.baseCurrency +
                                "/" +
                                props.quotaCurrency
                            );
                      props.onClose();
                    }
                  )
                );
              }}
            >
              Set
            </button>
          </div>
        </div>
      </div>
    </ModalRoot>
  );
};

export default SetAlertModal;
