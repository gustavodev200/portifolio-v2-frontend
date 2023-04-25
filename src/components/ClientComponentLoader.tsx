"use client";

import { useEffect, useState } from "react";
import { LoadingComponent } from "@/components/LoadingComponent";

export const ClientComponentLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading ? <LoadingComponent /> : null;
};
