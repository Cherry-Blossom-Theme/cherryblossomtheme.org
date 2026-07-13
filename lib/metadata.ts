import { Metadata } from "next";
import { siteName, siteTagline, siteUrl, siteDescription } from "../theme";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  keywords: ["cherry blossom theme", "theme", "color palette", "editor theme", "terminal theme"],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@cherryblossomtheme",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export function createMetadata(pageTitle: string, description: string): Metadata {
  return {
    title: `${pageTitle} | ${siteName}`,
    description,
    alternates: {
      canonical: `${siteUrl}/${pageTitle.toLowerCase().replace(/\s+/g, "-")}`,
    },
    openGraph: {
      title: `${pageTitle} | ${siteName}`,
      description,
      url: siteUrl,
      siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ${siteName}`,
      description,
      creator: "@cherryblossomtheme",
    },
  };
}
