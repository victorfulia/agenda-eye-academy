import React, { useContext, useMemo, useState } from "react";
import Card from "../../assets/imgs/card.png";

interface Props {
  children: JSX.Element;
}

export type ContextValue = {
 cards: {
  title: string;
  description: string;
  date: string;
  hours: string;
  price: string;
  url: string;
  img: any;
}[]
};

export const DataContext = React.createContext<ContextValue | undefined>(
  undefined
);

export const DataProvider: React.FC<Props> = ({ children, ...rest }) => {
  const [cards] = useState([
    {
      title: "Academia",
      description: "Treino de Bíceps e Tríceps",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card,
    },
    {
      title: "Academia",
      description: "Treino de Bíceps e Tríceps",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card,
    },
    {
      title: "Academia",
      description: "Treino de Bíceps e Tríceps",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card,
    },
    {
      title: "Academia",
      description: "Treino de Bíceps e Tríceps",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card,
    },
  ]);

  const value = useMemo(
    () => ({
     cards,
    }),
    [cards]
  );

  return (
    <DataContext.Provider value={value} {...rest}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): ContextValue => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useData must be used within an DataProvider");
  }

  return context;
};

//
// Utils
//
