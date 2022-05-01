import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type QuantityContextData = {
  quantity: string | number;
  handleChangeQuantity: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const QuantityContext = createContext({} as QuantityContextData);

type QuantityContextProps = {
  children: ReactNode;
};

export function QuantityContextProvider({ children }: QuantityContextProps) {
  const [quantity, setQuantity] = useState<string | number>("1");

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1")
      .replace(/^0[^.]/, "0");
    setQuantity(value);
  };

  return (
    <QuantityContext.Provider
      value={{
        quantity,
        handleChangeQuantity,
      }}
    >
      {children}
    </QuantityContext.Provider>
  );
}

export const useQuantity = () => {
  return useContext(QuantityContext);
};
