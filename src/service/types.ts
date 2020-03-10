/** @module types */
// Auto-generated, edits will be overwritten

namespace api {
export interface DoctorAffiliationViewModel {
  hospitalId?: string
  hospitalName?: string
  doctorId?: string
  doctorName?: string
}

export interface ManagerAffiliationViewModel {
  hospitalId?: string
  hospitalName?: string
  managerId?: string
  managerName?: string
}

export interface Tag {
  id?: string
  value?: string
  order?: number
}

export interface MediaViewModel {
  id?: string
  mediaType?: any
  url?: string
  thumbnailUrl?: string
  description?: string
  order?: number
}

export interface CreateArticleCommand {
  title?: string
  description?: string
  body?: string
  status?: any
  hospitalId?: string
  tags?: Tag[]
  medias?: MediaViewModel[]
}

export interface AuditableEntity {
  createdBy?: string
  updatedBy?: string
  deletedBy?: string
  createdDate?: Date
  updatedDate?: Date
  deletedDate?: Date
  isHidden?: boolean
  isDeleted?: boolean
}

export interface ArticleViewModel {
  id?: string
  title?: string
  description?: string
  body?: string
  status?: any
  userId?: string
  authorName?: string
  hospitalId?: string
  tags?: Tag[]
  medias?: MediaViewModel[]
  auditableEntity?: any
}

export interface UpdateArticleCommand {
  title?: string
  description?: string
  body?: string
  status?: any
  tags?: Tag[]
  medias?: MediaViewModel[]
}

export interface ArticleItemViewModel {
  id?: string
  title?: string
  description?: string
  body?: string
  status?: any
  userId?: string
  authorName?: string
  hospitalId?: string
  tags?: Tag[]
  medias?: MediaViewModel[]
  auditableEntity?: any
}

export interface PagedListMetaData {
  pageCount?: number
  totalItemCount?: number
  pageNumber?: number
  pageSize?: number
  hasPreviousPage?: boolean
  hasNextPage?: boolean
  isFirstPage?: boolean
  isLastPage?: boolean
  firstItemOnPage?: number
  lastItemOnPage?: number
}

export interface ArticlesViewModel {
  items?: ArticleItemViewModel[]
  metaData?: any
}

export interface CreateBookingCommand {
  packageId?: string
  approximateDateStart?: Date
  approximateDateEnd?: Date
}

export interface BookingItemViewModel {
  id?: string
  patientId?: string
  packageId?: string
  managerId?: string
  fee?: number
  applicationFee?: number
  approximateDateStart?: Date
  approximateDateEnd?: Date
  confirmedDateStart?: Date
  confirmedDateEnd?: Date
  bookingStatus?: any
}

export interface BookingsViewModel {
  items?: BookingItemViewModel[]
  metaData?: any
}

export interface BookingViewModel {
  id?: string
  patientId?: string
  packageId?: string
  managerId?: string
  fee?: number
  applicationFee?: number
  approximateDateStart?: Date
  approximateDateEnd?: Date
  confirmedDateStart?: Date
  confirmedDateEnd?: Date
  bookingStatus?: any
}

export interface UpdateBookingCommand {
  approximateDateStart?: Date
  approximateDateEnd?: Date
}

export interface UserLocationViewModel {
  locationType?: any
  latitude?: number
  longitude?: number
  country?: string
  state?: string
  county?: string
  city?: string
  zipCode?: string
  address?: string
}

export interface CreateCHAdminCommand {
  firstName?: string
  lastName?: string
  phone?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
  auditableEntity?: any
}

export interface UserItemViewModel {
  userName?: string
  firstName?: string
  lastName?: string
  fullname?: string
  phone?: string
  email?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  auditableEntity?: any
}

export interface CHAdminsViewModel {
  items?: UserItemViewModel[]
  metaData?: any
}

export interface CHAdminViewModel {
  userType?: string
  locations?: UserLocationViewModel[]
  userName?: string
  firstName?: string
  lastName?: string
  fullname?: string
  phone?: string
  email?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  auditableEntity?: any
}

export interface UpdateCHAdminCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
}

export interface CreateCHManagerCommand {
  userName?: string
  email?: string
  firstName?: string
  lastName?: string
  phone?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
  auditableEntity?: any
}

export interface CHManagersViewModel {
  items?: UserItemViewModel[]
  metaData?: any
}

export interface CHManagerViewModel {
  userType?: string
  locations?: UserLocationViewModel[]
  userName?: string
  firstName?: string
  lastName?: string
  fullname?: string
  phone?: string
  email?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  auditableEntity?: any
}

export interface UpdateCHManagerCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
}

export interface CreateCountryCommand {
  name?: string
  description?: string
  medias?: MediaViewModel[]
}

export interface CountryItemViewModel {
  id?: string
  name?: string
  description?: string
  hospitalsCount?: number
  doctorsCount?: number
  specialitiesCount?: number
  medias?: MediaViewModel[]
  auditableEntity?: any
}

export interface CountriesViewModel {
  items?: CountryItemViewModel[]
  metaData?: any
  totalHospitalsCount?: number
  totalDoctorsCount?: number
  totalSpecialitiesCount?: number
}

export interface CountryViewModel {
  id?: string
  name?: string
  description?: string
  hospitalsCount?: number
  doctorsCount?: number
  specialitiesCount?: number
  medias?: MediaViewModel[]
  auditableEntity?: any
}

export interface UpdateCountryCommand {
  name?: string
  description?: string
  medias?: MediaViewModel[]
}

export interface CreateDoctorCommand {
  userName?: string
  email?: string
  hospitalId?: string
  firstName?: string
  lastName?: string
  phone?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
  auditableEntity?: any
}

export interface DoctorsViewModel {
  items?: UserItemViewModel[]
  metaData?: any
}

export interface Media {
  id?: string
  mediaType?: any
  url?: string
  thumbnailUrl?: string
  description?: string
  height?: number
  width?: number
  order?: number
}

export interface Country {
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  hospitals?: Hospital[]
  medias?: Media[]
  auditableEntity?: any
}

export interface CoordinateSequence {
  dimension?: number
  measures?: number
  spatial?: number
  ordinates?: any
  hasZ?: boolean
  hasM?: boolean
  zOrdinateIndex?: number
  mOrdinateIndex?: number
  count?: number
}

export interface Coordinate {
  x?: number
  y?: number
  z?: number
  m?: number
  coordinateValue?: any
}

export interface PrecisionModel {
  isFloating?: boolean
  maximumSignificantDigits?: number
  scale?: number
  precisionModelType?: any
}

export interface CoordinateSequenceFactory {
  ordinates?: any
}

export interface GeometryFactory {
  precisionModel?: any
  coordinateSequenceFactory?: any
  srid?: number
}

export interface Envelope {
  isNull?: boolean
  width?: number
  height?: number
  minX?: number
  maxX?: number
  minY?: number
  maxY?: number
  area?: number
  minExtent?: number
  maxExtent?: number
  centre?: any
}

export interface Geometry {
  factory?: any
  userData?: any
  srid?: number
  geometryType?: string
  ogcGeometryType?: any
  precisionModel?: any
  coordinate?: any
  coordinates?: Coordinate[]
  numPoints?: number
  numGeometries?: number
  isSimple?: boolean
  isValid?: boolean
  isEmpty?: boolean
  area?: number
  length?: number
  centroid?: any
  interiorPoint?: any
  pointOnSurface?: any
  dimension?: any
  boundary?: any
  boundaryDimension?: any
  envelope?: any
  envelopeInternal?: any
  isRectangle?: boolean
}

export interface Point {
  coordinateSequence?: any
  coordinates?: Coordinate[]
  numPoints?: number
  isEmpty?: boolean
  dimension?: any
  boundaryDimension?: any
  x?: number
  y?: number
  coordinate?: any
  geometryType?: string
  ogcGeometryType?: any
  boundary?: any
  z?: number
  m?: number
  factory?: any
  userData?: any
  srid?: number
  precisionModel?: any
  numGeometries?: number
  isSimple?: boolean
  isValid?: boolean
  area?: number
  length?: number
  centroid?: any
  interiorPoint?: any
  pointOnSurface?: any
  envelope?: any
  envelopeInternal?: any
  isRectangle?: boolean
}

export interface Location {
  point?: any
  country?: string
  state?: string
  county?: string
  city?: string
  zipCode?: string
  address?: string
}

export interface DeviceLogin {
  id?: string
  deviceId?: string
  device?: any
  version?: string
  location?: any
  auditableEntity?: any
}

export interface Device {
  id?: string
  token?: string
  platform?: any
  appAlert?: boolean
  eventAlert?: boolean
  noticeAlert?: boolean
  deviceLogins?: DeviceLogin[]
  auditableEntity?: any
}

export interface UserLocation {
  point?: any
  country?: string
  state?: string
  county?: string
  city?: string
  zipCode?: string
  address?: string
  locationType?: any
}

export interface User {
  id?: string
  userName?: string
  email?: string
  firstName?: string
  lastName?: string
  normalizedName?: string
  phone?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  devices?: Device[]
  articles?: Article[]
  medias?: Media[]
  locations?: UserLocation[]
  auditableEntity?: any
}

export interface Article {
  id?: string
  title?: string
  normalizedTitle?: string
  description?: string
  body?: string
  status?: any
  userId?: string
  user?: any
  hospitalId?: string
  hospital?: any
  tags?: Tag[]
  medias?: Media[]
  auditableEntity?: any
}

export interface Equipment {
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  hospitalId?: string
  hospital?: any
  medias?: Media[]
  auditableEntity?: any
}

export interface HospitalReview {
  patientId?: string
  patient?: any
  hospitaltId?: string
  hospital?: any
  body?: string
  recommended?: boolean
  reviewCategory?: any
  rate?: number
}

export interface Department {
  id?: string
  hospitalId?: string
  hospital?: any
  name?: string
  normalizedName?: string
  additionalInfo?: string
}

export interface SpecialtyType {
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  auditableEntity?: any
}

export interface DoctorLanguage {
  id?: string
  doctorId?: string
  doctor?: any
  language?: string
}

export interface DoctorEducation {
  id?: string
  doctorId?: string
  doctor?: any
  institution?: string
  normalizedInstitution?: string
  qualification?: string
  normalizedQualification?: string
  graduationDate?: Date
}

export interface DoctorPortfolio {
  id?: string
  doctorId?: string
  doctor?: any
  name?: string
  normalizedName?: string
  description?: string
  photoBefore?: string
  photoAfter?: string
}

export interface DoctorCertificate {
  id?: string
  doctorId?: string
  doctor?: any
  certificate?: string
  normalizedCertificate?: string
  activeFrom?: Date
  activeTo?: Date
}

export interface DoctorAffiliation {
  doctorId?: string
  doctor?: any
  hospitalId?: string
  hospital?: any
}

export interface Award {
  id?: string
  name?: string
  image?: string
  date?: Date
}

export interface Doctor {
  code?: string
  startPracticeDate?: Date
  reviews?: DoctorReview[]
  languages?: DoctorLanguage[]
  educations?: DoctorEducation[]
  portfolios?: DoctorPortfolio[]
  specialties?: DoctorSpecialty[]
  certificates?: DoctorCertificate[]
  doctorAffiliations?: DoctorAffiliation[]
  awards?: Award[]
  id?: string
  userName?: string
  email?: string
  firstName?: string
  lastName?: string
  normalizedName?: string
  phone?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  devices?: Device[]
  articles?: Article[]
  medias?: Media[]
  locations?: UserLocation[]
  auditableEntity?: any
}

export interface DoctorSpecialty {
  doctorId?: string
  doctor?: any
  specialtyId?: string
  specialty?: any
  order?: number
}

export interface Specialty {
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  specialtyTypeId?: string
  specialtyType?: any
  hospitalSpecialties?: HospitalSpecialty[]
  doctorSpecialties?: DoctorSpecialty[]
  auditableEntity?: any
}

export interface AssessmentAnswer {
  assessmentId?: string
  assessment?: any
  bookingId?: string
  booking?: any
  textAnswer?: string
  booleanAnswer?: boolean
}

export interface Assessment {
  id?: string
  serviceId?: string
  service?: any
  question?: string
  normalizedQuestion?: string
  answerType?: any
  isRequired?: boolean
  order?: number
  assessmentAnswers?: AssessmentAnswer[]
}

export interface Service {
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  hospitalId?: string
  specialtyId?: string
  hospitalSpecialty?: any
  procedure?: any
  minPrice?: number
  maxPrice?: number
  priceReuqest?: boolean
  order?: number
  assessments?: Assessment[]
  auditableEntity?: any
}

export interface HospitalSpecialty {
  hospitalId?: string
  hospital?: any
  specialtyId?: string
  specialty?: any
  order?: number
  services?: Service[]
  auditableEntity?: any
}

export interface Accreditation {
  id?: string
  name?: string
  normalizedName?: string
  logo?: string
  country?: string
  accreditations?: HospitalAccreditation[]
}

export interface HospitalAccreditation {
  hospitalId?: string
  hospital?: any
  accreditationId?: string
  accreditation?: any
}

export interface Account {
  id?: string
  vendor?: any
  auditableEntity?: any
}

export interface Manager {
  affiliations?: ManagerAffiliation[]
  accounts?: Account[]
  id?: string
  userName?: string
  email?: string
  firstName?: string
  lastName?: string
  normalizedName?: string
  phone?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  devices?: Device[]
  articles?: Article[]
  medias?: Media[]
  locations?: UserLocation[]
  auditableEntity?: any
}

export interface ManagerAffiliation {
  managerId?: string
  manager?: any
  hospitalId?: string
  hospital?: any
}

export interface Hospital {
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  logo?: string
  overview?: string
  bedsCount?: number
  operationRoomsCount?: number
  icuBedsCount?: number
  medicalStaffCount?: number
  countryId?: string
  country?: any
  articles?: Article[]
  packages?: Package[]
  equipments?: Equipment[]
  reviews?: HospitalReview[]
  departments?: Department[]
  specialties?: HospitalSpecialty[]
  accreditations?: HospitalAccreditation[]
  doctorAffiliations?: DoctorAffiliation[]
  managerAffiliations?: ManagerAffiliation[]
  awards?: Award[]
  medias?: Media[]
  location?: any
  auditableEntity?: any
}

export interface Package {
  id?: string
  name?: string
  normalizedName?: string
  hospitalId?: string
  hospital?: any
  packageStatus?: any
  accomodation?: string
  trnasfer?: string
  bonus?: string
  packagePrice?: number
  managers?: Manager[]
  services?: Service[]
  bookings?: Booking[]
  auditableEntity?: any
}

export interface Customer {
  id?: string
  vendor?: any
  patientId?: string
  patient?: any
  payments?: Payment[]
  auditableEntity?: any
}

export interface ChangeLog {
  id?: string
  status?: number
  actorId?: string
  createdDate?: Date
}

export interface Payment {
  id?: string
  patientId?: string
  patient?: any
  customerId?: string
  customer?: any
  bookingId?: string
  booking?: any
  chargeId?: string
  refundId?: string
  chargeStatus?: any
  refundStatus?: any
  paymentStatus?: any
  currency?: string
  fee?: number
  applicationFee?: number
  cardBrand?: string
  cardLast4Digits?: string
  paymentStatusChangeLogs?: ChangeLog[]
}

export interface BookingComment {
  id?: string
  patientId?: string
  patient?: any
  bookingId?: string
  booking?: any
  body?: string
  medias?: Media[]
  auditableEntity?: any
}

export interface Booking {
  id?: string
  patientId?: string
  patient?: any
  packageId?: string
  package?: any
  fee?: number
  applicationFee?: number
  approximateDateStart?: Date
  approximateDateEnd?: Date
  confirmedDateStart?: Date
  confirmedDateEnd?: Date
  bookingStatus?: any
  rejectReason?: any
  isOpen?: boolean
  payments?: Payment[]
  bookingComments?: BookingComment[]
  assessmentAnswers?: AssessmentAnswer[]
  bookingStatusChangeLogs?: ChangeLog[]
  auditableEntity?: any
}

export interface Patient {
  contact?: string
  contactNumber?: string
  nationality?: string
  bookings?: Booking[]
  payments?: Payment[]
  customers?: Customer[]
  doctorReviews?: DoctorReview[]
  hospitalReviews?: HospitalReview[]
  bookingComments?: BookingComment[]
  id?: string
  userName?: string
  email?: string
  firstName?: string
  lastName?: string
  normalizedName?: string
  phone?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  devices?: Device[]
  articles?: Article[]
  medias?: Media[]
  locations?: UserLocation[]
  auditableEntity?: any
}

export interface DoctorReview {
  patientId?: string
  patient?: any
  doctorId?: string
  doctor?: any
  body?: string
  recommended?: boolean
  reviewCategory?: any
  rate?: number
}

export interface AwardViewModel {
  id?: string
  name?: string
  image?: string
  date?: Date
}

export interface DoctorViewModel {
  code?: string
  startPracticeDate?: Date
  reviews?: DoctorReview[]
  languages?: DoctorLanguage[]
  educations?: DoctorEducation[]
  portfolios?: DoctorPortfolio[]
  certificates?: DoctorCertificate[]
  doctorAffiliations?: DoctorAffiliationViewModel[]
  awards?: AwardViewModel[]
  specialties?: Specialty[]
  userType?: string
  locations?: UserLocationViewModel[]
  userName?: string
  firstName?: string
  lastName?: string
  fullname?: string
  phone?: string
  email?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  auditableEntity?: any
}

export interface UpdateDoctorCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
}

export interface CreateEquipmentCommand {
  name?: string
  description?: string
  medias?: MediaViewModel[]
  auditableEntity?: any
}

export interface EquipmentViewModel {
  id?: string
  name?: string
  description?: string
  hospitalId?: string
  hospitalName?: string
  medias?: MediaViewModel[]
  auditableEntity?: any
}

export interface UpdateEquipmentCommand {
  name?: string
  description?: string
  hospitalId?: string
  hospitalName?: string
  medias?: MediaViewModel[]
  auditableEntity?: any
}

export interface EquipmentItemViewModel {
  id?: string
  name?: string
  description?: string
  hospitalId?: string
  hospitalName?: string
  medias?: MediaViewModel[]
  auditableEntity?: any
}

export interface EquipmentsViewModel {
  items?: EquipmentItemViewModel[]
  metaData?: any
}

export interface LocationViewModel {
  latitude?: number
  longitude?: number
  country?: string
  state?: string
  county?: string
  city?: string
  zipCode?: string
  address?: string
}

export interface CreateHospitalCommand {
  name?: string
  description?: string
  logo?: string
  overview?: string
  bedsCount?: number
  operationRoomsCount?: number
  icuBedsCount?: number
  departmentsCount?: number
  medicalStaffCount?: number
  countryId?: string
  awards?: AwardViewModel[]
  medias?: MediaViewModel[]
  location?: any
}

export interface HospitalItemViewModel {
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  logo?: string
  overview?: string
  bedsCount?: number
  operationRoomsCount?: number
  icuBedsCount?: number
  medicalStaffCount?: number
  countryId?: string
  countryName?: string
  awards?: AwardViewModel[]
  medias?: MediaViewModel[]
  location?: any
  auditableEntity?: any
}

export interface HospitalsViewModel {
  items?: HospitalItemViewModel[]
  metaData?: any
}

export interface HospitalSpecialtyItemViewModel {
  hospitalId?: string
  hospitalName?: string
  specialtyId?: string
  specialtyName?: string
  specialtyTypeId?: string
  specialtyTypeName?: string
  order?: number
  created?: Date
}

export interface DoctorAffiliationItemViewModel {
  hospitalId?: string
  hospitalName?: string
  doctorId?: string
  doctorName?: string
}

export interface ManagerAffiliationItemViewModel {
  hospitalId?: string
  hospitalName?: string
  managerId?: string
  managerName?: string
}

export interface HospitalViewModel {
  articles?: ArticleItemViewModel[]
  equipments?: EquipmentItemViewModel[]
  specialties?: HospitalSpecialtyItemViewModel[]
  doctorAffiliations?: DoctorAffiliationItemViewModel[]
  managerAffiliations?: ManagerAffiliationItemViewModel[]
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  logo?: string
  overview?: string
  bedsCount?: number
  operationRoomsCount?: number
  icuBedsCount?: number
  medicalStaffCount?: number
  countryId?: string
  countryName?: string
  awards?: AwardViewModel[]
  medias?: MediaViewModel[]
  location?: any
  auditableEntity?: any
}

export interface UpdateHospitalCommand {
  articles?: ArticleItemViewModel[]
  equipments?: EquipmentItemViewModel[]
  specialties?: HospitalSpecialtyItemViewModel[]
  doctorAffiliations?: DoctorAffiliationItemViewModel[]
  managerAffiliations?: ManagerAffiliationItemViewModel[]
  name?: string
  normalizedName?: string
  description?: string
  logo?: string
  overview?: string
  bedsCount?: number
  operationRoomsCount?: number
  icuBedsCount?: number
  medicalStaffCount?: number
  countryName?: string
  awards?: AwardViewModel[]
  medias?: MediaViewModel[]
  location?: any
  auditableEntity?: any
}

export interface HospitalSpecialtyViewModel {
  hospitalId?: string
  hospitalName?: string
  specialtyId?: string
  specialtyName?: string
  specialtyTypeId?: string
  specialtyTypeName?: string
  order?: number
  created?: Date
}

export interface UpdateHospitalSpecialtySequenceCommand {
  hospitalSpecialtySequence?: string[]
}

export interface HospitalSpecialtiesViewModel {
  items?: HospitalSpecialtyItemViewModel[]
  metaData?: any
}

export interface CreateManagerCommand {
  userName?: string
  email?: string
  hospitalId?: string
  firstName?: string
  lastName?: string
  phone?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
  auditableEntity?: any
}

export interface ManagersViewModel {
  items?: UserItemViewModel[]
  metaData?: any
}

export interface ManagerViewModel {
  managerAffiliations?: ManagerAffiliationViewModel[]
  userType?: string
  locations?: UserLocationViewModel[]
  userName?: string
  firstName?: string
  lastName?: string
  fullname?: string
  phone?: string
  email?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  auditableEntity?: any
}

export interface UpdateManagerCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
}

export interface CreatePartnerCommand {
  userName?: string
  email?: string
  firstName?: string
  lastName?: string
  phone?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
  auditableEntity?: any
}

export interface PartnersViewModel {
  items?: UserItemViewModel[]
  metaData?: any
}

export interface PartnerViewModel {
  referralCode?: string
  referralCount?: number
  userType?: string
  locations?: UserLocationViewModel[]
  userName?: string
  firstName?: string
  lastName?: string
  fullname?: string
  phone?: string
  email?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  auditableEntity?: any
}

export interface UpdatePartnerCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
}

export interface CreatePatientCommand {
  userName?: string
  email?: string
  isAdmin?: boolean
  firstName?: string
  lastName?: string
  phone?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
  auditableEntity?: any
}

export interface PatientsViewModel {
  items?: UserItemViewModel[]
  metaData?: any
}

export interface PatientViewModel {
  contact?: string
  contactNumber?: string
  nationality?: string
  userType?: string
  locations?: UserLocationViewModel[]
  userName?: string
  firstName?: string
  lastName?: string
  fullname?: string
  phone?: string
  email?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  auditableEntity?: any
}

export interface UpdatePatientCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  locations?: UserLocationViewModel[]
}

export interface UserViewModel {
  userType?: string
  locations?: UserLocationViewModel[]
  userName?: string
  firstName?: string
  lastName?: string
  fullname?: string
  phone?: string
  email?: string
  photo?: string
  photoThumbnail?: string
  gender?: any
  dateOfBirth?: Date
  auditableEntity?: any
}

export interface ChangeEmailCommand {
  email?: string
}

export interface CreateServiceCommand {
  name?: string
  description?: string
  minPrice?: number
  maxPrice?: number
  priceReuqest?: boolean
  procedure?: any
}

export interface ServiceViewModel {
  hospitalId?: string
  specialtyId?: string
  specialtyTypeId?: string
  specialtyTypeName?: string
  id?: string
  name?: string
  description?: string
  procedure?: any
  minPrice?: number
  maxPrice?: number
  priceReuqest?: boolean
  order?: number
  auditableEntity?: any
}

export interface UpdateServiceCommand {
  specialtyTypeId?: string
  specialtyTypeName?: string
  name?: string
  description?: string
  procedure?: any
  minPrice?: number
  maxPrice?: number
  priceReuqest?: boolean
  order?: number
  auditableEntity?: any
}

export interface UpdateServiceSequenceCommand {
  serviceSequence?: string[]
}

export interface ServiceItemViewModel {
  id?: string
  name?: string
  description?: string
  procedure?: any
  minPrice?: number
  maxPrice?: number
  priceReuqest?: boolean
  order?: number
  auditableEntity?: any
}

export interface ServicesViewModel {
  items?: ServiceItemViewModel[]
  metaData?: any
}

export interface CreateSpecialtyCommand {
  name?: string
  description?: string
}

export interface SpecialtyItemViewModel {
  id?: string
  name?: string
  description?: string
  specialtyTypeId?: string
  specialtyTypeName?: string
  auditableEntity?: any
}

export interface SpecialtiesViewModel {
  items?: SpecialtyItemViewModel[]
  metaData?: any
}

export interface SpecialtyViewModel {
  id?: string
  name?: string
  description?: string
  specialtyTypeId?: string
  specialtyTypeName?: string
  auditableEntity?: any
}

export interface UpdateSpecialtyCommand {
  name?: string
  description?: string
  specialtyTypeName?: string
  auditableEntity?: any
}

export interface OpenApiSpec {
  host: string
  basePath: string
  schemes: string[]
  contentTypes: string[]
  accepts: string[]
  securityDefinitions?: {[key: string]: SecurityDefinition}
}

export interface SecurityDefinition {
  type: 'basic'|'apiKey'|'oauth2'
  description?: string
  name?: string
  in?: 'query'|'header'
  flow?: 'implicit'|'password'|'application'|'accessCode'
  authorizationUrl?: string
  tokenUrl?: string
  scopes?: {[key: string]: string}
}

export type CollectionFormat = 'csv'|'ssv'|'tsv'|'pipes'|'multi'
export type HttpMethod = 'get'|'put'|'post'|'delete'|'options'|'head'|'patch'

export interface OperationInfo {
  path: string
  method: HttpMethod
  security?: OperationSecurity[]
  contentTypes?: string[]
  accepts?: string[]
}

export interface OperationSecurity {
  id: string
  scopes?: string[]
}

export interface OperationParamGroups {
  header?: {[key: string]: string}
  path?: {[key: string]: string|number|boolean}
  query?: {[key: string]: string|string[]|number|boolean}
  formData?: {[key: string]: string|number|boolean}
  body?: any
}

export interface ServiceRequest {
  method: HttpMethod
  url: string
  headers: { [index: string]: string }
  body: any
}

export interface RequestInfo {
  baseUrl: string
  parameters: OperationParamGroups
}

export interface ResponseOutcome {
  retry?: boolean
  res: Response<any>
}

export interface ServiceOptions {
  /**
   * The service url.
   *
   * If not specified then defaults to the one defined in the Open API
   * spec used to generate the service api.
   */
  url?: string
  /**
   * Fetch options object to apply to each request e.g 
   * 
   *     { mode: 'cors', credentials: true }
   * 
   * If a headers object is defined it will be merged with any defined in
   * a specific request, the latter taking precedence with name collisions.
   */
  fetchOptions?: any
  /**
   * Function which should resolve rights for a request (e.g auth token) given
   * the OpenAPI defined security requirements of the operation to be executed.
   */
  getAuthorization?: (security: OperationSecurity, securityDefinitions: any, op: OperationInfo) => Promise<OperationRightsInfo>
  /**
   * Given an error response, custom format and return a ServiceError
   */
  formatServiceError?: (response: FetchResponse, data: any) => ServiceError
  /**
   * Before each Fetch request is dispatched this function will be called if it's defined.
   * 
   * You can use this to augment each request, for example add extra query parameters.
   * 
   *     const params = reqInfo.parameters;
   *     if (params && params.query) {
   *       params.query.lang = "en"
   *     }
   *     return reqInfo
   */
  processRequest?: (op: OperationInfo, reqInfo: RequestInfo) => RequestInfo
  /**
   * If you need some type of request retry behavior this function
   * is the place to do it.
   * 
   * The response is promise based so simply resolve the "res" parameter
   * if you're happy with it e.g.
   * 
   *     if (!res.error) return Promise.resolve({ res });
   * 
   * Otherwise return a promise which flags a retry.
   * 
   *     return Promise.resolve({ res, retry: true })
   * 
   * You can of course do other things before this, like refresh an auth
   * token if the error indicated it expired.
   * 
   * The "attempt" param will tell you how many times a retry has been attempted.
   */
  processResponse?: (req: api.ServiceRequest, res: Response<any>, attempt: number) => Promise<api.ResponseOutcome>
  /**
   * If a fetch request fails this function gives you a chance to process
   * that error before it's returned up the promise chain to the original caller.
   */
  processError?: (req: api.ServiceRequest, res: api.ResponseOutcome) => Promise<api.ResponseOutcome>
  /**
   * By default the authorization header name is "Authorization".
   * This property allows you to override it.
   * 
   * One place this can come up is where your API is under the same host as
   * a website it powers. If the website has Basic Auth in place then some
   * browsers will override your "Authorization: Bearer <token>" header with
   * the Basic Auth value when calling your API. To counter this we can change
   * the header, e.g.
   * 
   *     authorizationHeader = "X-Authorization"
   * 
   * The service must of course accept this alternative.
   */
  authorizationHeader?: string
}

export type OperationRights = {[key: string]: OperationRightsInfo}

export interface OperationRightsInfo {
  username?: string
  password?: string
  token?: string
  apiKey?: string
}

export interface Response<T> {
  raw: FetchResponse
  /**
   * If 'error' is true then data will be of type ServiceError
   */
  data?: T
  /**
   * True if there was a service error, false if not
   */
  error?: boolean
}

export interface FetchResponse extends FetchBody {
  url: string
  status: number
  statusText: string
  ok: boolean
  headers: Headers
  type: string | FetchResponseType
  size: number
  timeout: number
  redirect(url: string, status: number): FetchResponse
  error(): FetchResponse
  clone(): FetchResponse
}

export interface FetchBody {
  bodyUsed: boolean
  arrayBuffer(): Promise<ArrayBuffer>
  blob(): Promise<Blob>
  formData(): Promise<FormData>
  json(): Promise<any>
  json<T>(): Promise<T>
  text(): Promise<string>
}

export interface FetchHeaders {
  get(name: string): string
  getAll(name: string): Array<string>
  has(name: string): boolean
}

export declare enum FetchResponseType { 'basic', 'cors', 'default', 'error', 'opaque' }

export class ServiceError extends Error {
  status: number
}

/**
 * Flux standard action meta for service action
 */
export interface ServiceMeta {
  res: FetchResponse
  info: any
}

}
/**
 * @typedef DoctorAffiliationViewModel
 * @memberof module:types
 * 
 * @property {string} hospitalId 
 * @property {string} hospitalName 
 * @property {string} doctorId 
 * @property {string} doctorName 
 */

/**
 * @typedef ManagerAffiliationViewModel
 * @memberof module:types
 * 
 * @property {string} hospitalId 
 * @property {string} hospitalName 
 * @property {string} managerId 
 * @property {string} managerName 
 */

/**
 * @typedef Tag
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} value 
 * @property {number} order 
 */

/**
 * @typedef MediaViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {object} mediaType 
 * @property {string} url 
 * @property {string} thumbnailUrl 
 * @property {string} description 
 * @property {number} order 
 */

/**
 * @typedef CreateArticleCommand
 * @memberof module:types
 * 
 * @property {string} title 
 * @property {string} description 
 * @property {string} body 
 * @property {object} status 
 * @property {string} hospitalId 
 * @property {module:types.Tag[]} tags 
 * @property {module:types.MediaViewModel[]} medias 
 */

/**
 * @typedef AuditableEntity
 * @memberof module:types
 * 
 * @property {string} createdBy 
 * @property {string} updatedBy 
 * @property {string} deletedBy 
 * @property {date} createdDate 
 * @property {date} updatedDate 
 * @property {date} deletedDate 
 * @property {boolean} isHidden 
 * @property {boolean} isDeleted 
 */

/**
 * @typedef ArticleViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} title 
 * @property {string} description 
 * @property {string} body 
 * @property {object} status 
 * @property {string} userId 
 * @property {string} authorName 
 * @property {string} hospitalId 
 * @property {module:types.Tag[]} tags 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateArticleCommand
 * @memberof module:types
 * 
 * @property {string} title 
 * @property {string} description 
 * @property {string} body 
 * @property {object} status 
 * @property {module:types.Tag[]} tags 
 * @property {module:types.MediaViewModel[]} medias 
 */

/**
 * @typedef ArticleItemViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} title 
 * @property {string} description 
 * @property {string} body 
 * @property {object} status 
 * @property {string} userId 
 * @property {string} authorName 
 * @property {string} hospitalId 
 * @property {module:types.Tag[]} tags 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef PagedListMetaData
 * @memberof module:types
 * 
 * @property {number} pageCount 
 * @property {number} totalItemCount 
 * @property {number} pageNumber 
 * @property {number} pageSize 
 * @property {boolean} hasPreviousPage 
 * @property {boolean} hasNextPage 
 * @property {boolean} isFirstPage 
 * @property {boolean} isLastPage 
 * @property {number} firstItemOnPage 
 * @property {number} lastItemOnPage 
 */

/**
 * @typedef ArticlesViewModel
 * @memberof module:types
 * 
 * @property {module:types.ArticleItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef CreateBookingCommand
 * @memberof module:types
 * 
 * @property {string} packageId 
 * @property {date} approximateDateStart 
 * @property {date} approximateDateEnd 
 */

/**
 * @typedef BookingItemViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} patientId 
 * @property {string} packageId 
 * @property {string} managerId 
 * @property {number} fee 
 * @property {number} applicationFee 
 * @property {date} approximateDateStart 
 * @property {date} approximateDateEnd 
 * @property {date} confirmedDateStart 
 * @property {date} confirmedDateEnd 
 * @property {object} bookingStatus 
 */

/**
 * @typedef BookingsViewModel
 * @memberof module:types
 * 
 * @property {module:types.BookingItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef BookingViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} patientId 
 * @property {string} packageId 
 * @property {string} managerId 
 * @property {number} fee 
 * @property {number} applicationFee 
 * @property {date} approximateDateStart 
 * @property {date} approximateDateEnd 
 * @property {date} confirmedDateStart 
 * @property {date} confirmedDateEnd 
 * @property {object} bookingStatus 
 */

/**
 * @typedef UpdateBookingCommand
 * @memberof module:types
 * 
 * @property {date} approximateDateStart 
 * @property {date} approximateDateEnd 
 */

/**
 * @typedef UserLocationViewModel
 * @memberof module:types
 * 
 * @property {object} locationType 
 * @property {number} latitude 
 * @property {number} longitude 
 * @property {string} country 
 * @property {string} state 
 * @property {string} county 
 * @property {string} city 
 * @property {string} zipCode 
 * @property {string} address 
 */

/**
 * @typedef CreateCHAdminCommand
 * @memberof module:types
 * 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} phone 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UserItemViewModel
 * @memberof module:types
 * 
 * @property {string} userName 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} fullname 
 * @property {string} phone 
 * @property {string} email 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {object} auditableEntity 
 */

/**
 * @typedef CHAdminsViewModel
 * @memberof module:types
 * 
 * @property {module:types.UserItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef CHAdminViewModel
 * @memberof module:types
 * 
 * @property {string} userType 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {string} userName 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} fullname 
 * @property {string} phone 
 * @property {string} email 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateCHAdminCommand
 * @memberof module:types
 * 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 */

/**
 * @typedef CreateCHManagerCommand
 * @memberof module:types
 * 
 * @property {string} userName 
 * @property {string} email 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} phone 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {object} auditableEntity 
 */

/**
 * @typedef CHManagersViewModel
 * @memberof module:types
 * 
 * @property {module:types.UserItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef CHManagerViewModel
 * @memberof module:types
 * 
 * @property {string} userType 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {string} userName 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} fullname 
 * @property {string} phone 
 * @property {string} email 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateCHManagerCommand
 * @memberof module:types
 * 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 */

/**
 * @typedef CreateCountryCommand
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} description 
 * @property {module:types.MediaViewModel[]} medias 
 */

/**
 * @typedef CountryItemViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} description 
 * @property {number} hospitalsCount 
 * @property {number} doctorsCount 
 * @property {number} specialitiesCount 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef CountriesViewModel
 * @memberof module:types
 * 
 * @property {module:types.CountryItemViewModel[]} items 
 * @property {object} metaData 
 * @property {number} totalHospitalsCount 
 * @property {number} totalDoctorsCount 
 * @property {number} totalSpecialitiesCount 
 */

/**
 * @typedef CountryViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} description 
 * @property {number} hospitalsCount 
 * @property {number} doctorsCount 
 * @property {number} specialitiesCount 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateCountryCommand
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} description 
 * @property {module:types.MediaViewModel[]} medias 
 */

/**
 * @typedef CreateDoctorCommand
 * @memberof module:types
 * 
 * @property {string} userName 
 * @property {string} email 
 * @property {string} hospitalId 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} phone 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {object} auditableEntity 
 */

/**
 * @typedef DoctorsViewModel
 * @memberof module:types
 * 
 * @property {module:types.UserItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef Media
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {object} mediaType 
 * @property {string} url 
 * @property {string} thumbnailUrl 
 * @property {string} description 
 * @property {number} height 
 * @property {number} width 
 * @property {number} order 
 */

/**
 * @typedef Country
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} description 
 * @property {module:types.Hospital[]} hospitals 
 * @property {module:types.Media[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef CoordinateSequence
 * @memberof module:types
 * 
 * @property {number} dimension 
 * @property {number} measures 
 * @property {number} spatial 
 * @property {object} ordinates 
 * @property {boolean} hasZ 
 * @property {boolean} hasM 
 * @property {number} zOrdinateIndex 
 * @property {number} mOrdinateIndex 
 * @property {number} count 
 */

/**
 * @typedef Coordinate
 * @memberof module:types
 * 
 * @property {number} x 
 * @property {number} y 
 * @property {number} z 
 * @property {number} m 
 * @property {object} coordinateValue 
 */

/**
 * @typedef PrecisionModel
 * @memberof module:types
 * 
 * @property {boolean} isFloating 
 * @property {number} maximumSignificantDigits 
 * @property {number} scale 
 * @property {object} precisionModelType 
 */

/**
 * @typedef CoordinateSequenceFactory
 * @memberof module:types
 * 
 * @property {object} ordinates 
 */

/**
 * @typedef GeometryFactory
 * @memberof module:types
 * 
 * @property {object} precisionModel 
 * @property {object} coordinateSequenceFactory 
 * @property {number} srid 
 */

/**
 * @typedef Envelope
 * @memberof module:types
 * 
 * @property {boolean} isNull 
 * @property {number} width 
 * @property {number} height 
 * @property {number} minX 
 * @property {number} maxX 
 * @property {number} minY 
 * @property {number} maxY 
 * @property {number} area 
 * @property {number} minExtent 
 * @property {number} maxExtent 
 * @property {object} centre 
 */

/**
 * @typedef Geometry
 * @memberof module:types
 * 
 * @property {object} factory 
 * @property {object} userData 
 * @property {number} srid 
 * @property {string} geometryType 
 * @property {object} ogcGeometryType 
 * @property {object} precisionModel 
 * @property {object} coordinate 
 * @property {module:types.Coordinate[]} coordinates 
 * @property {number} numPoints 
 * @property {number} numGeometries 
 * @property {boolean} isSimple 
 * @property {boolean} isValid 
 * @property {boolean} isEmpty 
 * @property {number} area 
 * @property {number} length 
 * @property {object} centroid 
 * @property {object} interiorPoint 
 * @property {object} pointOnSurface 
 * @property {object} dimension 
 * @property {object} boundary 
 * @property {object} boundaryDimension 
 * @property {object} envelope 
 * @property {object} envelopeInternal 
 * @property {boolean} isRectangle 
 */

/**
 * @typedef Point
 * @memberof module:types
 * 
 * @property {object} coordinateSequence 
 * @property {module:types.Coordinate[]} coordinates 
 * @property {number} numPoints 
 * @property {boolean} isEmpty 
 * @property {object} dimension 
 * @property {object} boundaryDimension 
 * @property {number} x 
 * @property {number} y 
 * @property {object} coordinate 
 * @property {string} geometryType 
 * @property {object} ogcGeometryType 
 * @property {object} boundary 
 * @property {number} z 
 * @property {number} m 
 * @property {object} factory 
 * @property {object} userData 
 * @property {number} srid 
 * @property {object} precisionModel 
 * @property {number} numGeometries 
 * @property {boolean} isSimple 
 * @property {boolean} isValid 
 * @property {number} area 
 * @property {number} length 
 * @property {object} centroid 
 * @property {object} interiorPoint 
 * @property {object} pointOnSurface 
 * @property {object} envelope 
 * @property {object} envelopeInternal 
 * @property {boolean} isRectangle 
 */

/**
 * @typedef Location
 * @memberof module:types
 * 
 * @property {object} point 
 * @property {string} country 
 * @property {string} state 
 * @property {string} county 
 * @property {string} city 
 * @property {string} zipCode 
 * @property {string} address 
 */

/**
 * @typedef DeviceLogin
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} deviceId 
 * @property {object} device 
 * @property {string} version 
 * @property {object} location 
 * @property {object} auditableEntity 
 */

/**
 * @typedef Device
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} token 
 * @property {object} platform 
 * @property {boolean} appAlert 
 * @property {boolean} eventAlert 
 * @property {boolean} noticeAlert 
 * @property {module:types.DeviceLogin[]} deviceLogins 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UserLocation
 * @memberof module:types
 * 
 * @property {object} point 
 * @property {string} country 
 * @property {string} state 
 * @property {string} county 
 * @property {string} city 
 * @property {string} zipCode 
 * @property {string} address 
 * @property {object} locationType 
 */

/**
 * @typedef User
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} userName 
 * @property {string} email 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} normalizedName 
 * @property {string} phone 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.Device[]} devices 
 * @property {module:types.Article[]} articles 
 * @property {module:types.Media[]} medias 
 * @property {module:types.UserLocation[]} locations 
 * @property {object} auditableEntity 
 */

/**
 * @typedef Article
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} title 
 * @property {string} normalizedTitle 
 * @property {string} description 
 * @property {string} body 
 * @property {object} status 
 * @property {string} userId 
 * @property {object} user 
 * @property {string} hospitalId 
 * @property {object} hospital 
 * @property {module:types.Tag[]} tags 
 * @property {module:types.Media[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef Equipment
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} description 
 * @property {string} hospitalId 
 * @property {object} hospital 
 * @property {module:types.Media[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef HospitalReview
 * @memberof module:types
 * 
 * @property {string} patientId 
 * @property {object} patient 
 * @property {string} hospitaltId 
 * @property {object} hospital 
 * @property {string} body 
 * @property {boolean} recommended 
 * @property {object} reviewCategory 
 * @property {number} rate 
 */

/**
 * @typedef Department
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} hospitalId 
 * @property {object} hospital 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} additionalInfo 
 */

/**
 * @typedef SpecialtyType
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} description 
 * @property {object} auditableEntity 
 */

/**
 * @typedef DoctorLanguage
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} doctorId 
 * @property {object} doctor 
 * @property {string} language 
 */

/**
 * @typedef DoctorEducation
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} doctorId 
 * @property {object} doctor 
 * @property {string} institution 
 * @property {string} normalizedInstitution 
 * @property {string} qualification 
 * @property {string} normalizedQualification 
 * @property {date} graduationDate 
 */

/**
 * @typedef DoctorPortfolio
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} doctorId 
 * @property {object} doctor 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} description 
 * @property {string} photoBefore 
 * @property {string} photoAfter 
 */

/**
 * @typedef DoctorCertificate
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} doctorId 
 * @property {object} doctor 
 * @property {string} certificate 
 * @property {string} normalizedCertificate 
 * @property {date} activeFrom 
 * @property {date} activeTo 
 */

/**
 * @typedef DoctorAffiliation
 * @memberof module:types
 * 
 * @property {string} doctorId 
 * @property {object} doctor 
 * @property {string} hospitalId 
 * @property {object} hospital 
 */

/**
 * @typedef Award
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} image 
 * @property {date} date 
 */

/**
 * @typedef Doctor
 * @memberof module:types
 * 
 * @property {string} code 
 * @property {date} startPracticeDate 
 * @property {module:types.DoctorReview[]} reviews 
 * @property {module:types.DoctorLanguage[]} languages 
 * @property {module:types.DoctorEducation[]} educations 
 * @property {module:types.DoctorPortfolio[]} portfolios 
 * @property {module:types.DoctorSpecialty[]} specialties 
 * @property {module:types.DoctorCertificate[]} certificates 
 * @property {module:types.DoctorAffiliation[]} doctorAffiliations 
 * @property {module:types.Award[]} awards 
 * @property {string} id 
 * @property {string} userName 
 * @property {string} email 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} normalizedName 
 * @property {string} phone 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.Device[]} devices 
 * @property {module:types.Article[]} articles 
 * @property {module:types.Media[]} medias 
 * @property {module:types.UserLocation[]} locations 
 * @property {object} auditableEntity 
 */

/**
 * @typedef DoctorSpecialty
 * @memberof module:types
 * 
 * @property {string} doctorId 
 * @property {object} doctor 
 * @property {string} specialtyId 
 * @property {object} specialty 
 * @property {number} order 
 */

/**
 * @typedef Specialty
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} description 
 * @property {string} specialtyTypeId 
 * @property {object} specialtyType 
 * @property {module:types.HospitalSpecialty[]} hospitalSpecialties 
 * @property {module:types.DoctorSpecialty[]} doctorSpecialties 
 * @property {object} auditableEntity 
 */

/**
 * @typedef AssessmentAnswer
 * @memberof module:types
 * 
 * @property {string} assessmentId 
 * @property {object} assessment 
 * @property {string} bookingId 
 * @property {object} booking 
 * @property {string} textAnswer 
 * @property {boolean} booleanAnswer 
 */

/**
 * @typedef Assessment
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} serviceId 
 * @property {object} service 
 * @property {string} question 
 * @property {string} normalizedQuestion 
 * @property {object} answerType 
 * @property {boolean} isRequired 
 * @property {number} order 
 * @property {module:types.AssessmentAnswer[]} assessmentAnswers 
 */

/**
 * @typedef Service
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} description 
 * @property {string} hospitalId 
 * @property {string} specialtyId 
 * @property {object} hospitalSpecialty 
 * @property {object} procedure 
 * @property {number} minPrice 
 * @property {number} maxPrice 
 * @property {boolean} priceReuqest 
 * @property {number} order 
 * @property {module:types.Assessment[]} assessments 
 * @property {object} auditableEntity 
 */

/**
 * @typedef HospitalSpecialty
 * @memberof module:types
 * 
 * @property {string} hospitalId 
 * @property {object} hospital 
 * @property {string} specialtyId 
 * @property {object} specialty 
 * @property {number} order 
 * @property {module:types.Service[]} services 
 * @property {object} auditableEntity 
 */

/**
 * @typedef Accreditation
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} logo 
 * @property {string} country 
 * @property {module:types.HospitalAccreditation[]} accreditations 
 */

/**
 * @typedef HospitalAccreditation
 * @memberof module:types
 * 
 * @property {string} hospitalId 
 * @property {object} hospital 
 * @property {string} accreditationId 
 * @property {object} accreditation 
 */

/**
 * @typedef Account
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {object} vendor 
 * @property {object} auditableEntity 
 */

/**
 * @typedef Manager
 * @memberof module:types
 * 
 * @property {module:types.ManagerAffiliation[]} affiliations 
 * @property {module:types.Account[]} accounts 
 * @property {string} id 
 * @property {string} userName 
 * @property {string} email 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} normalizedName 
 * @property {string} phone 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.Device[]} devices 
 * @property {module:types.Article[]} articles 
 * @property {module:types.Media[]} medias 
 * @property {module:types.UserLocation[]} locations 
 * @property {object} auditableEntity 
 */

/**
 * @typedef ManagerAffiliation
 * @memberof module:types
 * 
 * @property {string} managerId 
 * @property {object} manager 
 * @property {string} hospitalId 
 * @property {object} hospital 
 */

/**
 * @typedef Hospital
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} description 
 * @property {string} logo 
 * @property {string} overview 
 * @property {number} bedsCount 
 * @property {number} operationRoomsCount 
 * @property {number} icuBedsCount 
 * @property {number} medicalStaffCount 
 * @property {string} countryId 
 * @property {object} country 
 * @property {module:types.Article[]} articles 
 * @property {module:types.Package[]} packages 
 * @property {module:types.Equipment[]} equipments 
 * @property {module:types.HospitalReview[]} reviews 
 * @property {module:types.Department[]} departments 
 * @property {module:types.HospitalSpecialty[]} specialties 
 * @property {module:types.HospitalAccreditation[]} accreditations 
 * @property {module:types.DoctorAffiliation[]} doctorAffiliations 
 * @property {module:types.ManagerAffiliation[]} managerAffiliations 
 * @property {module:types.Award[]} awards 
 * @property {module:types.Media[]} medias 
 * @property {object} location 
 * @property {object} auditableEntity 
 */

/**
 * @typedef Package
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} hospitalId 
 * @property {object} hospital 
 * @property {object} packageStatus 
 * @property {string} accomodation 
 * @property {string} trnasfer 
 * @property {string} bonus 
 * @property {number} packagePrice 
 * @property {module:types.Manager[]} managers 
 * @property {module:types.Service[]} services 
 * @property {module:types.Booking[]} bookings 
 * @property {object} auditableEntity 
 */

/**
 * @typedef Customer
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {object} vendor 
 * @property {string} patientId 
 * @property {object} patient 
 * @property {module:types.Payment[]} payments 
 * @property {object} auditableEntity 
 */

/**
 * @typedef ChangeLog
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {number} status 
 * @property {string} actorId 
 * @property {date} createdDate 
 */

/**
 * @typedef Payment
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} patientId 
 * @property {object} patient 
 * @property {string} customerId 
 * @property {object} customer 
 * @property {string} bookingId 
 * @property {object} booking 
 * @property {string} chargeId 
 * @property {string} refundId 
 * @property {object} chargeStatus 
 * @property {object} refundStatus 
 * @property {object} paymentStatus 
 * @property {string} currency 
 * @property {number} fee 
 * @property {number} applicationFee 
 * @property {string} cardBrand 
 * @property {string} cardLast4Digits 
 * @property {module:types.ChangeLog[]} paymentStatusChangeLogs 
 */

/**
 * @typedef BookingComment
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} patientId 
 * @property {object} patient 
 * @property {string} bookingId 
 * @property {object} booking 
 * @property {string} body 
 * @property {module:types.Media[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef Booking
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} patientId 
 * @property {object} patient 
 * @property {string} packageId 
 * @property {object} package 
 * @property {number} fee 
 * @property {number} applicationFee 
 * @property {date} approximateDateStart 
 * @property {date} approximateDateEnd 
 * @property {date} confirmedDateStart 
 * @property {date} confirmedDateEnd 
 * @property {object} bookingStatus 
 * @property {object} rejectReason 
 * @property {boolean} isOpen 
 * @property {module:types.Payment[]} payments 
 * @property {module:types.BookingComment[]} bookingComments 
 * @property {module:types.AssessmentAnswer[]} assessmentAnswers 
 * @property {module:types.ChangeLog[]} bookingStatusChangeLogs 
 * @property {object} auditableEntity 
 */

/**
 * @typedef Patient
 * @memberof module:types
 * 
 * @property {string} contact 
 * @property {string} contactNumber 
 * @property {string} nationality 
 * @property {module:types.Booking[]} bookings 
 * @property {module:types.Payment[]} payments 
 * @property {module:types.Customer[]} customers 
 * @property {module:types.DoctorReview[]} doctorReviews 
 * @property {module:types.HospitalReview[]} hospitalReviews 
 * @property {module:types.BookingComment[]} bookingComments 
 * @property {string} id 
 * @property {string} userName 
 * @property {string} email 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} normalizedName 
 * @property {string} phone 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.Device[]} devices 
 * @property {module:types.Article[]} articles 
 * @property {module:types.Media[]} medias 
 * @property {module:types.UserLocation[]} locations 
 * @property {object} auditableEntity 
 */

/**
 * @typedef DoctorReview
 * @memberof module:types
 * 
 * @property {string} patientId 
 * @property {object} patient 
 * @property {string} doctorId 
 * @property {object} doctor 
 * @property {string} body 
 * @property {boolean} recommended 
 * @property {object} reviewCategory 
 * @property {number} rate 
 */

/**
 * @typedef AwardViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} image 
 * @property {date} date 
 */

/**
 * @typedef DoctorViewModel
 * @memberof module:types
 * 
 * @property {string} code 
 * @property {date} startPracticeDate 
 * @property {module:types.DoctorReview[]} reviews 
 * @property {module:types.DoctorLanguage[]} languages 
 * @property {module:types.DoctorEducation[]} educations 
 * @property {module:types.DoctorPortfolio[]} portfolios 
 * @property {module:types.DoctorCertificate[]} certificates 
 * @property {module:types.DoctorAffiliationViewModel[]} doctorAffiliations 
 * @property {module:types.AwardViewModel[]} awards 
 * @property {module:types.Specialty[]} specialties 
 * @property {string} userType 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {string} userName 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} fullname 
 * @property {string} phone 
 * @property {string} email 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateDoctorCommand
 * @memberof module:types
 * 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 */

/**
 * @typedef CreateEquipmentCommand
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} description 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef EquipmentViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} description 
 * @property {string} hospitalId 
 * @property {string} hospitalName 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateEquipmentCommand
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} description 
 * @property {string} hospitalId 
 * @property {string} hospitalName 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef EquipmentItemViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} description 
 * @property {string} hospitalId 
 * @property {string} hospitalName 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} auditableEntity 
 */

/**
 * @typedef EquipmentsViewModel
 * @memberof module:types
 * 
 * @property {module:types.EquipmentItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef LocationViewModel
 * @memberof module:types
 * 
 * @property {number} latitude 
 * @property {number} longitude 
 * @property {string} country 
 * @property {string} state 
 * @property {string} county 
 * @property {string} city 
 * @property {string} zipCode 
 * @property {string} address 
 */

/**
 * @typedef CreateHospitalCommand
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} description 
 * @property {string} logo 
 * @property {string} overview 
 * @property {number} bedsCount 
 * @property {number} operationRoomsCount 
 * @property {number} icuBedsCount 
 * @property {number} departmentsCount 
 * @property {number} medicalStaffCount 
 * @property {string} countryId 
 * @property {module:types.AwardViewModel[]} awards 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} location 
 */

/**
 * @typedef HospitalItemViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} description 
 * @property {string} logo 
 * @property {string} overview 
 * @property {number} bedsCount 
 * @property {number} operationRoomsCount 
 * @property {number} icuBedsCount 
 * @property {number} medicalStaffCount 
 * @property {string} countryId 
 * @property {string} countryName 
 * @property {module:types.AwardViewModel[]} awards 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} location 
 * @property {object} auditableEntity 
 */

/**
 * @typedef HospitalsViewModel
 * @memberof module:types
 * 
 * @property {module:types.HospitalItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef HospitalSpecialtyItemViewModel
 * @memberof module:types
 * 
 * @property {string} hospitalId 
 * @property {string} hospitalName 
 * @property {string} specialtyId 
 * @property {string} specialtyName 
 * @property {string} specialtyTypeId 
 * @property {string} specialtyTypeName 
 * @property {number} order 
 * @property {date} created 
 */

/**
 * @typedef DoctorAffiliationItemViewModel
 * @memberof module:types
 * 
 * @property {string} hospitalId 
 * @property {string} hospitalName 
 * @property {string} doctorId 
 * @property {string} doctorName 
 */

/**
 * @typedef ManagerAffiliationItemViewModel
 * @memberof module:types
 * 
 * @property {string} hospitalId 
 * @property {string} hospitalName 
 * @property {string} managerId 
 * @property {string} managerName 
 */

/**
 * @typedef HospitalViewModel
 * @memberof module:types
 * 
 * @property {module:types.ArticleItemViewModel[]} articles 
 * @property {module:types.EquipmentItemViewModel[]} equipments 
 * @property {module:types.HospitalSpecialtyItemViewModel[]} specialties 
 * @property {module:types.DoctorAffiliationItemViewModel[]} doctorAffiliations 
 * @property {module:types.ManagerAffiliationItemViewModel[]} managerAffiliations 
 * @property {string} id 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} description 
 * @property {string} logo 
 * @property {string} overview 
 * @property {number} bedsCount 
 * @property {number} operationRoomsCount 
 * @property {number} icuBedsCount 
 * @property {number} medicalStaffCount 
 * @property {string} countryId 
 * @property {string} countryName 
 * @property {module:types.AwardViewModel[]} awards 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} location 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateHospitalCommand
 * @memberof module:types
 * 
 * @property {module:types.ArticleItemViewModel[]} articles 
 * @property {module:types.EquipmentItemViewModel[]} equipments 
 * @property {module:types.HospitalSpecialtyItemViewModel[]} specialties 
 * @property {module:types.DoctorAffiliationItemViewModel[]} doctorAffiliations 
 * @property {module:types.ManagerAffiliationItemViewModel[]} managerAffiliations 
 * @property {string} name 
 * @property {string} normalizedName 
 * @property {string} description 
 * @property {string} logo 
 * @property {string} overview 
 * @property {number} bedsCount 
 * @property {number} operationRoomsCount 
 * @property {number} icuBedsCount 
 * @property {number} medicalStaffCount 
 * @property {string} countryName 
 * @property {module:types.AwardViewModel[]} awards 
 * @property {module:types.MediaViewModel[]} medias 
 * @property {object} location 
 * @property {object} auditableEntity 
 */

/**
 * @typedef HospitalSpecialtyViewModel
 * @memberof module:types
 * 
 * @property {string} hospitalId 
 * @property {string} hospitalName 
 * @property {string} specialtyId 
 * @property {string} specialtyName 
 * @property {string} specialtyTypeId 
 * @property {string} specialtyTypeName 
 * @property {number} order 
 * @property {date} created 
 */

/**
 * @typedef UpdateHospitalSpecialtySequenceCommand
 * @memberof module:types
 * 
 * @property {string[]} hospitalSpecialtySequence 
 */

/**
 * @typedef HospitalSpecialtiesViewModel
 * @memberof module:types
 * 
 * @property {module:types.HospitalSpecialtyItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef CreateManagerCommand
 * @memberof module:types
 * 
 * @property {string} userName 
 * @property {string} email 
 * @property {string} hospitalId 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} phone 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {object} auditableEntity 
 */

/**
 * @typedef ManagersViewModel
 * @memberof module:types
 * 
 * @property {module:types.UserItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef ManagerViewModel
 * @memberof module:types
 * 
 * @property {module:types.ManagerAffiliationViewModel[]} managerAffiliations 
 * @property {string} userType 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {string} userName 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} fullname 
 * @property {string} phone 
 * @property {string} email 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateManagerCommand
 * @memberof module:types
 * 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 */

/**
 * @typedef CreatePartnerCommand
 * @memberof module:types
 * 
 * @property {string} userName 
 * @property {string} email 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} phone 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {object} auditableEntity 
 */

/**
 * @typedef PartnersViewModel
 * @memberof module:types
 * 
 * @property {module:types.UserItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef PartnerViewModel
 * @memberof module:types
 * 
 * @property {string} referralCode 
 * @property {number} referralCount 
 * @property {string} userType 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {string} userName 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} fullname 
 * @property {string} phone 
 * @property {string} email 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdatePartnerCommand
 * @memberof module:types
 * 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 */

/**
 * @typedef CreatePatientCommand
 * @memberof module:types
 * 
 * @property {string} userName 
 * @property {string} email 
 * @property {boolean} isAdmin 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} phone 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {object} auditableEntity 
 */

/**
 * @typedef PatientsViewModel
 * @memberof module:types
 * 
 * @property {module:types.UserItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef PatientViewModel
 * @memberof module:types
 * 
 * @property {string} contact 
 * @property {string} contactNumber 
 * @property {string} nationality 
 * @property {string} userType 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {string} userName 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} fullname 
 * @property {string} phone 
 * @property {string} email 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdatePatientCommand
 * @memberof module:types
 * 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {module:types.UserLocationViewModel[]} locations 
 */

/**
 * @typedef UserViewModel
 * @memberof module:types
 * 
 * @property {string} userType 
 * @property {module:types.UserLocationViewModel[]} locations 
 * @property {string} userName 
 * @property {string} firstName 
 * @property {string} lastName 
 * @property {string} fullname 
 * @property {string} phone 
 * @property {string} email 
 * @property {string} photo 
 * @property {string} photoThumbnail 
 * @property {object} gender 
 * @property {date} dateOfBirth 
 * @property {object} auditableEntity 
 */

/**
 * @typedef ChangeEmailCommand
 * @memberof module:types
 * 
 * @property {string} email 
 */

/**
 * @typedef CreateServiceCommand
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} description 
 * @property {number} minPrice 
 * @property {number} maxPrice 
 * @property {boolean} priceReuqest 
 * @property {object} procedure 
 */

/**
 * @typedef ServiceViewModel
 * @memberof module:types
 * 
 * @property {string} hospitalId 
 * @property {string} specialtyId 
 * @property {string} specialtyTypeId 
 * @property {string} specialtyTypeName 
 * @property {string} id 
 * @property {string} name 
 * @property {string} description 
 * @property {object} procedure 
 * @property {number} minPrice 
 * @property {number} maxPrice 
 * @property {boolean} priceReuqest 
 * @property {number} order 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateServiceCommand
 * @memberof module:types
 * 
 * @property {string} specialtyTypeId 
 * @property {string} specialtyTypeName 
 * @property {string} name 
 * @property {string} description 
 * @property {object} procedure 
 * @property {number} minPrice 
 * @property {number} maxPrice 
 * @property {boolean} priceReuqest 
 * @property {number} order 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateServiceSequenceCommand
 * @memberof module:types
 * 
 * @property {string[]} serviceSequence 
 */

/**
 * @typedef ServiceItemViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} description 
 * @property {object} procedure 
 * @property {number} minPrice 
 * @property {number} maxPrice 
 * @property {boolean} priceReuqest 
 * @property {number} order 
 * @property {object} auditableEntity 
 */

/**
 * @typedef ServicesViewModel
 * @memberof module:types
 * 
 * @property {module:types.ServiceItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef CreateSpecialtyCommand
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} description 
 */

/**
 * @typedef SpecialtyItemViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} description 
 * @property {string} specialtyTypeId 
 * @property {string} specialtyTypeName 
 * @property {object} auditableEntity 
 */

/**
 * @typedef SpecialtiesViewModel
 * @memberof module:types
 * 
 * @property {module:types.SpecialtyItemViewModel[]} items 
 * @property {object} metaData 
 */

/**
 * @typedef SpecialtyViewModel
 * @memberof module:types
 * 
 * @property {string} id 
 * @property {string} name 
 * @property {string} description 
 * @property {string} specialtyTypeId 
 * @property {string} specialtyTypeName 
 * @property {object} auditableEntity 
 */

/**
 * @typedef UpdateSpecialtyCommand
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} description 
 * @property {string} specialtyTypeName 
 * @property {object} auditableEntity 
 */
