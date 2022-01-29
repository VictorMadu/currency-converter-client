import { useState, useEffect, useRef } from "react";
import { CurrencyWS } from "../../api/ws-utils";
import { useAppSelector, useAppDispatch } from "../../redux";
import { fetchCurrenciesSuccess } from "../../redux/currency/currency.actions";
import { selectCurrencyBase } from "../../redux/currency/currency.selectors";
import { selectUserToken } from "../../redux/user/user.selectors";
import { OrWithArr } from "../../types";

interface IPageWrapperProps {
  children: OrWithArr<JSX.Element>;
}

const PageWrapper = (props: IPageWrapperProps) => {
  const currWsRef = useRef<CurrencyWS | null>(null);
  const userToken = useAppSelector(selectUserToken);
  const currencyBase = useAppSelector(selectCurrencyBase);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      currWsRef.current && currWsRef.current.close();
    };
  }, []);

  useEffect(() => {
    const run = async () => {
      if (!userToken || currWsRef.current) return;

      currWsRef.current = await CurrencyWS.getInstance(userToken);
      currWsRef.current?.subscribePriceUpdate((payload) => {
        dispatch(fetchCurrenciesSuccess(payload));
      });
    };

    run();
  }, [dispatch, userToken]);

  useEffect(() => {
    if (currWsRef.current)
      currWsRef.current.updatePriceUpdateSetting({ base: currencyBase });
  }, [currencyBase]);

  return (
    <div className="h-screen w-full">
      <div className="relative mx-auto flex flex-col bg-clip-padding bg-opacity-10 backdrop-filter bakdrop-blur-lg h-full">
        {props.children}
      </div>
    </div>
  );
};

export default PageWrapper;
