 interface iRouteConfig {
  path: string;
  componentPath: string;
  exact?: boolean;
}

interface iRoueLink {
  [key: string]: string;
}


export type { iRoueLink, iRouteConfig } 
