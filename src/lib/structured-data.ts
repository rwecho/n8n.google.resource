export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "n8n Google Resource",
  description:
    "强大的自动化工作流平台，帮助您连接 Google 服务和其他应用程序，实现业务流程自动化，提高工作效率。",
  url: process.env.NEXT_PUBLIC_BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "n8n Google Resource",
  description:
    "强大的自动化工作流平台，帮助您连接 Google 服务和其他应用程序，实现业务流程自动化，提高工作效率。",
  url: process.env.NEXT_PUBLIC_BASE_URL,
  logo: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`,
  sameAs: [],
};

export const softwareApplicationStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "n8n Google Resource",
  description:
    "强大的自动化工作流平台，帮助您连接 Google 服务和其他应用程序，实现业务流程自动化，提高工作效率。",
  url: process.env.NEXT_PUBLIC_BASE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};
