"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

interface Props {
  children: JSX.Element;
}

export type ContextValue = {
  courses: any[];
  loading: boolean;
};

export const CoursesContext = React.createContext<ContextValue | undefined>(
  undefined
);

export const CoursesProvider: React.FC<Props> = ({ children, ...rest }) => {
  const [loading, setLoading] = useState(false);

  const [courses, setCourses] = useState<any[]>([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/courses");
      setCourses(res?.data.results);
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
    <CoursesContext.Provider value={value} {...rest}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourse = (): ContextValue => {
  const context = useContext(CoursesContext);

  if (context === undefined) {
    throw new Error("useCourse must be used within an CoursesProvider");
  }

  return context;
};

//
// Utils
//
