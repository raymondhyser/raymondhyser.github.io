export interface Resource {
  name: string;
  url: string;
  description: string;
}

export interface ResourceCategory {
  name: string;
  slug: string;
  resources: Resource[];
}

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  {
    name: "Digital Archives",
    slug: "digital-archives",
    resources: [
      {
        name: "Internet Archive",
        url: "https://archive.org",
        description: "Millions of digitized books, periodicals, and archival documents, freely accessible.",
      },
      {
        name: "HathiTrust Digital Library",
        url: "https://www.hathitrust.org",
        description: "A large-scale digital library of scanned books, journals, and government documents.",
      },
      {
        name: "Slave Voyages",
        url: "https://www.slavevoyages.org",
        description: "A digital memorial and dataset documenting the transatlantic and intra-American slave trades.",
      },
    ],
  },
  {
    name: "DH Tools",
    slug: "dh-tools",
    resources: [
      {
        name: "Zotero",
        url: "https://www.zotero.org",
        description: "Free, open-source reference manager for collecting, organizing, and citing research.",
      },
      {
        name: "Voyant Tools",
        url: "https://voyant-tools.org",
        description: "Web-based text analysis environment for reading and analyzing digital texts.",
      },
      {
        name: "Tropy",
        url: "https://tropy.org",
        description: "Free tool for organizing and describing photos of research materials from archives.",
      },
    ],
  },
  {
    name: "Mapping and GIS",
    slug: "mapping-gis",
    resources: [
      {
        name: "QGIS",
        url: "https://qgis.org",
        description: "Free, open-source geographic information system for spatial analysis and map-making.",
      },
      {
        name: "ArcGIS StoryMaps",
        url: "https://storymaps.arcgis.com",
        description: "Platform for combining maps with narrative text, images, and multimedia.",
      },
      {
        name: "David Rumsey Map Collection",
        url: "https://www.davidrumsey.com",
        description: "One of the largest online collections of historical maps, freely browsable.",
      },
    ],
  },
  {
    name: "Text Annotation",
    slug: "text-annotation",
    resources: [
      {
        name: "hypothes.is",
        url: "https://web.hypothes.is",
        description: "Open-source tool for collaborative annotation of web pages and PDFs.",
      },
      {
        name: "AVAnnotate",
        url: "https://www.avannotate.org",
        description: "Mellon Foundation-funded application for annotating audiovisual materials and curating digital exhibits.",
      },
      {
        name: "Recogito",
        url: "https://recogito.pelagios.org",
        description: "Collaborative platform for annotating texts, images, and tabular data with places and entities.",
      },
    ],
  },
];
