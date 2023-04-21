export interface SearchResponse {
  version: string;
  hitCount: number;
  nextCursorMark: string;
  nextPageUrl: string;
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
  source: Source;
  pmid: string;
  pmcid?: string;
  fullTextIdList?: FullTextIDList;
  doi: string;
  title: string;
  authorString: string;
  authorList: AuthorList;
  journalInfo: JournalInfo;
  pubYear: string;
  pageInfo: string;
  abstractText?: string;
  affiliation: string;
  publicationStatus: PublicationStatus;
  language: Language;
  pubModel: PubModel;
  pubTypeList: PubTypeList;
  meshHeadingList: MeshHeadingList;
  keywordList?: KeywordList;
  chemicalList?: ChemicalList;
  subsetList: SubsetList;
  fullTextUrlList: FullTextURLList;
  isOpenAccess: AuthMan;
  inEPMC: AuthMan;
  inPMC: AuthMan;
  hasPDF: AuthMan;
  hasBook: AuthMan;
  hasSuppl: AuthMan;
  citedByCount: number;
  hasData: AuthMan;
  hasReferences: AuthMan;
  hasTextMinedTerms: AuthMan;
  hasDbCrossReferences: AuthMan;
  hasLabsLinks: AuthMan;
  license?: string;
  authMan: AuthMan;
  epmcAuthMan: AuthMan;
  nihAuthMan: AuthMan;
  hasTMAccessionNumbers: AuthMan;
  dateOfCompletion: string;
  dateOfCreation: string;
  firstIndexDate: string;
  fullTextReceivedDate?: string;
  dateOfRevision: string;
  firstPublicationDate: string;
  authorIdList?: AuthorIDList;
  dataLinksTagsList?: DataLinksTagsList;
  grantsList?: GrantsList;
  tmAccessionTypeList?: TmAccessionTypeList;
}

export enum AuthMan {
  N = 'N',
  Y = 'Y',
}

export interface AuthorIDList {
  authorId: AuthorID[];
}

export interface AuthorID {
  type: Type;
  value: string;
}

export enum Type {
  Orcid = 'ORCID',
}

export interface AuthorList {
  author: Author[];
}

export interface Author {
  fullName: string;
  firstName: string;
  lastName: string;
  initials: string;
  authorAffiliationDetailsList: AuthorAffiliationDetailsList;
  authorId?: AuthorID;
}

export interface AuthorAffiliationDetailsList {
  authorAffiliation: AuthorAffiliation[];
}

export interface AuthorAffiliation {
  affiliation: string;
}

export interface ChemicalList {
  chemical: Chemical[];
}

export interface Chemical {
  name: string;
  registryNumber: string;
}

export interface DataLinksTagsList {
  dataLinkstag: string[];
}

export interface FullTextIDList {
  fullTextId: string[];
}

export interface FullTextURLList {
  fullTextUrl: FullTextURL[];
}

export interface FullTextURL {
  availability: Availability;
  availabilityCode: AvailabilityCode;
  documentStyle: DocumentStyle;
  site: Site;
  url: string;
}

export enum Availability {
  OpenAccess = 'Open access',
  SubscriptionRequired = 'Subscription required',
}

export enum AvailabilityCode {
  Oa = 'OA',
  S = 'S',
}

export enum DocumentStyle {
  Doi = 'doi',
  HTML = 'html',
  PDF = 'pdf',
}

export enum Site {
  Doi = 'DOI',
  EuropePMC = 'Europe_PMC',
}

export interface GrantsList {
  grant: Grant[];
}

export interface Grant {
  agency: string;
  orderIn: number;
  grantId?: string;
}

export interface JournalInfo {
  issue: string;
  volume: string;
  journalIssueId: number;
  dateOfPublication: DateOfPublication;
  monthOfPublication: number;
  yearOfPublication: number;
  printPublicationDate: string;
  journal: Journal;
}

export enum DateOfPublication {
  The2023DEC = '2023 Dec',
  The2023Jul = '2023 Jul',
  The2023Jun = '2023 Jun',
}

export interface Journal {
  title: string;
  medlineAbbreviation: string;
  isoabbreviation: string;
  nlmid: string;
  essn: string;
  issn: string;
}

export interface KeywordList {
  keyword: string[];
}

export enum Language {
  Eng = 'eng',
}

export interface MeshHeadingList {
  meshHeading: MeshHeading[];
}

export interface MeshHeading {
  majorTopic_YN: AuthMan;
  descriptorName: string;
  meshQualifierList?: MeshQualifierList;
}

export interface MeshQualifierList {
  meshQualifier: MeshQualifier[];
}

export interface MeshQualifier {
  abbreviation: string;
  qualifierName: string;
  majorTopic_YN: AuthMan;
}

export enum PubModel {
  Print = 'Print',
}

export interface PubTypeList {
  pubType: string[];
}

export enum PublicationStatus {
  Ppublish = 'ppublish',
}

export enum Source {
  Med = 'MED',
}

export interface SubsetList {
  subset: Subset[];
}

export interface Subset {
  code: Code;
  name: Name;
}

export enum Code {
  IM = 'IM',
}

export enum Name {
  IndexMedicus = 'Index Medicus',
}

export interface TmAccessionTypeList {
  accessionType: string[];
}
