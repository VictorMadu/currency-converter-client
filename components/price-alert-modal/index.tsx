import { useEffect, useRef, useState } from "react";
import { CurrencyWS, IPriceAlertListener } from "../../api/ws-utils";
import { useAppSelector } from "../../redux";
import { fetchCurrenciesSuccess } from "../../redux/currency/currency.actions";
import { selectUserToken } from "../../redux/user/user.selectors";
import PriceAlertModal from "./_modal";
import { map, filter } from "lodash";
import ModalRoot from "../modal-root";

const PriceAlertModalContainer = () => {
  const currWsRef = useRef<CurrencyWS | null>(null);
  const userToken = useAppSelector(selectUserToken);
  const [alerts, setAlerts] = useState<
    {
      alertId: string;
      base: string;
      quota: string;
      triggeredTime: string;
      msg: string;
    }[]
  >([
    {
      alertId: "1",
      base: "NGN",
      quota: "USD",
      triggeredTime: "2022-04-04",
      msg: "Price has reached it",
    },
    {
      alertId: "2",
      base: "NGN",
      quota: "USD",
      triggeredTime: "2022-04-04",
      msg: "Price has reached it",
    },
  ]);

  useEffect(() => {
    return () => {
      currWsRef.current && currWsRef.current.close();
    };
  }, []);

  useEffect(() => {
    const run = async () => {
      if (!userToken || currWsRef.current) return;
      currWsRef.current = await CurrencyWS.getInstance(userToken);
      currWsRef.current?.subscribePriceAlert((payload) => {
        setAlerts([...alerts, payload]);
      });
    };
    run();
  }, [alerts, userToken]);

  return alerts.length ? (
    <ModalRoot>
      <div
        className={"absolute w-full h-full top-0 left-0  bg-black/40 sm:px-0"}
      >
        {map(alerts, (alert) => (
          <PriceAlertModal
            key={alert.alertId}
            msg={alert.msg}
            base={alert.base}
            quota={alert.quota}
            triggeredTime={new Date(alert.triggeredTime)}
            onClose={() => {
              setAlerts(filter(alerts, a => a.alertId !== alert.alertId));
            }}
          />
        ))}{" "}
      </div>
    </ModalRoot>
  ) : (
    <></>
  );
};

export default PriceAlertModalContainer;
