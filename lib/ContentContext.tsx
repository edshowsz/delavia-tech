"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { PT_CONTENT, EN_CONTENT } from "./content-data";

// Type inference from the content object
type ContentType = typeof PT_CONTENT;

const ContentContext = createContext<ContentType>(PT_CONTENT);

export const useContent = () => useContext(ContentContext);

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<ContentType>(PT_CONTENT);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        // First check browser language as it's instant
        const browserLang = navigator.language;
        if (browserLang.startsWith("en-US")) {
          setContent(EN_CONTENT);
          // If browser is explicitly US English, we can skip IP check or do it to confirm
        }

        // Then check IP for more accuracy regarding "location"
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code === 'US') {
          setContent(EN_CONTENT);
        }
      } catch (error) {
        console.error("Failed to detect location:", error);
      } finally {
        setHasChecked(true);
      }
    };

    checkLocation();
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};
