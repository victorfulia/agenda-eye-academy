import React, { useContext, useMemo, useState } from "react";
import { Client } from "@notionhq/client";
import Card from "../../assets/imgs/card.png";
import Card1 from "../../assets/imgs/card1.png";
import Card2 from "../../assets/imgs/card2.png";
import Card3 from "../../assets/imgs/card3.png";
import { Icard } from "../../components/types/types";

interface Props {
  children: JSX.Element;
}

const notion = new Client({
  auth: `${process.env.NOTION_SECRET}`,
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
      color: "#FFCE59",
    },
    {
      title: "Workshop",
      description: "Curso JavaScript e TypeScript do básico ao avançado",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card1,
      color: "#00B8FE",
    },
    {
      title: "Academia",
      description: "Hábitos para melhorar seu dia-a-dia",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card2,
      color: "#FFCE59",
    },
    {
      title: "Marketing",
      description: "Marketing de Rede Sociais",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card3,
      color: "#FF5995",
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getCourses = async () => {
    try {
      setLoading(true);
      const res = await notion.databases.query({
        database_id: `${process.env.NOTION_DATABASE_ID}`,
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
