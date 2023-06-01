import React, { useContext, useMemo, useState } from "react";
import { Client } from "@notionhq/client";
import Card from "../../assets/imgs/card.png";
import { Icard } from "../../components/types/types";

interface Props {
  children: JSX.Element;
}

const notionDatabaseId = "";
const notionSecret = "";
const notion = new Client({
  auth: `${notionSecret}`,
});

export type ContextValue = {
  courses: Icard[];
  loading: boolean;
};

export const DataContext = React.createContext<ContextValue | undefined>(
  undefined
);

export const DataProvider: React.FC<Props> = ({ children, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<Icard[]>([
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getCourses = async () => {
    try {
      setLoading(true);
      const res = await notion.databases.query({
        database_id: `${notionDatabaseId}`,
      });

      setCourses(res.results as any);
    } catch {
      console.log("Something went wrong, please try again later!");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getCourses();
  // }, []);

  const value = useMemo(
    () => ({
      courses,
      loading,
    }),
    [courses, loading]
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
