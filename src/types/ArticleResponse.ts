export interface ArticleResponse {
  version: string;
  hitCount: number;
  request: Request;
  resultList: ResultList;
}

export interface Request {
  queryString: string;
  resultType: string;
  cursorMark: string;
  pageSize: number;
  sort: string;
  synonym: boolean;
}

export interface ResultList {
  result: Result[];
}

export interface Result {
  id: string;
  source: string;
  fullTextIdList: FullTextIDList;
  title: string;
  authorString: string;
  authorList: AuthorList;
  pubYear: string;
  abstractText: string;
  pubTypeList: PubTypeList;
  bookOrReportDetails: BookOrReportDetails;
  fullTextUrlList: FullTextURLList;
  isOpenAccess: string;
  inEPMC: string;
  inPMC: string;
  hasPDF: string;
  hasBook: string;
  hasSuppl: string;
  citedByCount: number;
  hasData: string;
  hasReferences: string;
  hasTextMinedTerms: string;
  hasDbCrossReferences: string;
  hasLabsLinks: string;
  license: string;
  authMan: string;
  epmcAuthMan: string;
  nihAuthMan: string;
  manuscriptId: string;
  hasTMAccessionNumbers: string;
  dateOfCreation: string;
  firstIndexDate: string;
  fullTextReceivedDate: string;
  firstPublicationDate: string;
}

export interface AuthorList {
  author: Author[];
}

export interface Author {
  fullName: string;
  firstName: string;
  lastName: string;
  initials: string;
}

export interface BookOrReportDetails {
  publisher: string;
  yearOfPublication: number;
}

export interface FullTextIDList {
  fullTextId: string[];
}

export interface FullTextURLList {
  fullTextUrl: FullTextURL[];
}

export interface FullTextURL {
  availability: string;
  availabilityCode: string;
  documentStyle: string;
  site: string;
  url: string;
}

export interface PubTypeList {
  pubType: string[];
}
