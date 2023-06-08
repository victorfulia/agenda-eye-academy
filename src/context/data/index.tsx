import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

// Types
import { Icard } from "../../components/types/types";

interface Props {
  children: JSX.Element;
}

export type ContextValue = {
  courses: any[];
  loading: boolean;
};

export const DataContext = React.createContext<ContextValue | undefined>(
  undefined
);

export const DataProvider: React.FC<Props> = ({ children, ...rest }) => {
  const [loading, setLoading] = useState(false);

  const [courses, setCourses] = useState<any[]>([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3009/query-database");
      setCourses(res.data.results);
    } catch {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
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
