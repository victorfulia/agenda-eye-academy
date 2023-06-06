import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Client } from "@notionhq/client";

// Icons
import Card from "../../assets/imgs/card.png";
import Card1 from "../../assets/imgs/card1.png";
import Card2 from "../../assets/imgs/card2.png";
import Card3 from "../../assets/imgs/card3.png";

// Types
import { Icard } from "../../components/types/types";
// import axios from "axios";

interface Props {
  children: JSX.Element;
}

export type ContextValue = {
  courses: Icard[];
  loading: boolean;
};

export const DataContext = React.createContext<ContextValue | undefined>(
  undefined
);

export const DataProvider: React.FC<Props> = ({ children, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const notion = useMemo(
    () =>
      new Client({
        auth: process.env.NOTION_KEY,
        baseUrl: "https://cors-anywhere.herokuapp.com/https://api.notion.com/",
      }),
    []
  );

  const [courses] = useState<Icard[]>([
    {
      title: "Academia",
      description: "Treino de Bíceps e Tríceps",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card,
      color: "bg-[#FFCE59]",
    },
    {
      title: "Workshop",
      description: "Curso JavaScript e TypeScript do básico ao avançado",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card1,
      color: "bg-[#00B8FE]",
    },
    {
      title: "Academia",
      description: "Hábitos para melhorar seu dia-a-dia",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card2,
      color: "bg-[#FFCE59]",
    },
    {
      title: "Marketing",
      description: "Marketing de Rede Sociais",
      date: "De 26 a 28 de Maio",
      hours: "08 Horas",
      price: "15",
      url: "",
      img: Card3,
      color: "bg-[#FF5995]",
    },
  ]);

  const getCourses = useCallback(async () => {
    try {
      setLoading(true);

      // let token = "secret_1JrOZtQn1KE438lVUkhhpJ4u1phZco8kX3PDzuBU4CB";

      // axios
      //   .get(
      //     "https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/databases/dc3e3776e4e04dfebe93c30f971ced0a",
      //     {
      //       headers: {
      //         Authorization: `Bearer: ${token}`,
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   )
      //   .then((res) => res.data)
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });

      const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID || "",
      });

      console.log(response);
    } catch (e) {
      console.log(e, "ERRROOOOOOOOR");
      // console.log("Something went wrong, please try again later!");
    } finally {
      setLoading(false);
    }
  }, [notion.databases]);

  // async function getStaticProps() {
  //   await fetch(
  //     "https://cors.yasbr.com/https://api.notion.com/v1/databases/2f26ee68df304251aad48ddc420cba3d"
  //   ).then((res) => console.log(res));
  // }

  useEffect(() => {
    getCourses();
    // getStaticProps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
