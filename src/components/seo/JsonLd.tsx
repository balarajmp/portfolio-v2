import React from "react";
import { getPersonJsonLd, getWebSiteJsonLd } from "@/lib/seo";

interface JsonLdProps {
  /** Optional custom schema objects to inject (e.g., project schema) */
  readonly customSchemas?: ReadonlyArray<Record<string, unknown>>;
}

/**
 * JsonLd Component
 * Renders inline script elements containing schema.org JSON-LD structured data.
 * Injects Google Knowledge Graph Person and WebSite schemas by default.
 */
export const JsonLd: React.FC<JsonLdProps> = ({ customSchemas = [] }) => {
  const personSchema = getPersonJsonLd();
  const websiteSchema = getWebSiteJsonLd();

  const allSchemas = [personSchema, websiteSchema, ...customSchemas];

  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={`jsonld-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
};

JsonLd.displayName = "JsonLd";
