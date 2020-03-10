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

export type ArticleStatus = "Draft" | "Active" | "Archived"

export interface Tag {
  id?: string
  value?: string
  order?: number
}

export type MediaType = "Photo" | "Video" | "Youtube" | "Document"

export interface MediaViewModel {
  id?: string
  mediaType?: {}
  url?: string
  thumbnailUrl?: string
  description?: string
  order?: number
}

export interface CreateArticleCommand {
  title?: string
  description?: string
  body?: string
  status?: {}
  hospitalId?: string
  tags?: Tag[]
  medias?: MediaViewModel[]
}

export interface AuditableEntity {
  createdBy?: string
  updatedBy?: string
  deletedBy?: string
  createdDate?: string
  updatedDate?: string
  deletedDate?: string
  isHidden?: boolean
  isDeleted?: boolean
}

export interface ArticleViewModel {
  id?: string
  title?: string
  description?: string
  body?: string
  status?: {}
  userId?: string
  authorName?: string
  hospitalId?: string
  tags?: Tag[]
  medias?: MediaViewModel[]
  auditableEntity?: {}
}

export interface UpdateArticleCommand {
  title?: string
  description?: string
  body?: string
  status?: {}
  tags?: Tag[]
  medias?: MediaViewModel[]
}

export interface ArticleItemViewModel {
  id?: string
  title?: string
  description?: string
  body?: string
  status?: {}
  userId?: string
  authorName?: string
  hospitalId?: string
  tags?: Tag[]
  medias?: MediaViewModel[]
  auditableEntity?: {}
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
  metaData?: {}
}

export interface CreateBookingCommand {
  packageId?: string
  approximateDateStart?: string
  approximateDateEnd?: string
}

export type BookingStatus = "New" | "Rejected" | "Approved" | "Paid" | "Canceled"

export interface BookingItemViewModel {
  id?: string
  patientId?: string
  packageId?: string
  managerId?: string
  fee?: number
  applicationFee?: number
  approximateDateStart?: string
  approximateDateEnd?: string
  confirmedDateStart?: string
  confirmedDateEnd?: string
  bookingStatus?: {}
}

export interface BookingsViewModel {
  items?: BookingItemViewModel[]
  metaData?: {}
}

export interface BookingViewModel {
  id?: string
  patientId?: string
  packageId?: string
  managerId?: string
  fee?: number
  applicationFee?: number
  approximateDateStart?: string
  approximateDateEnd?: string
  confirmedDateStart?: string
  confirmedDateEnd?: string
  bookingStatus?: {}
}

export interface UpdateBookingCommand {
  approximateDateStart?: string
  approximateDateEnd?: string
}

export type Gender = "NotSpecified" | "Male" | "Female" | "NonBinary" | "PreferNotToSay"

export type UserLocationType = "LivesIn" | "BirthPlace"

export interface UserLocationViewModel {
  locationType?: {}
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
  gender?: {}
  dateOfBirth?: string
  locations?: UserLocationViewModel[]
  auditableEntity?: {}
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
  gender?: {}
  dateOfBirth?: string
  auditableEntity?: {}
}

export interface CHAdminsViewModel {
  items?: UserItemViewModel[]
  metaData?: {}
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
  gender?: {}
  dateOfBirth?: string
  auditableEntity?: {}
}

export interface UpdateCHAdminCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: {}
  dateOfBirth?: string
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
  gender?: {}
  dateOfBirth?: string
  locations?: UserLocationViewModel[]
  auditableEntity?: {}
}

export interface CHManagersViewModel {
  items?: UserItemViewModel[]
  metaData?: {}
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
  gender?: {}
  dateOfBirth?: string
  auditableEntity?: {}
}

export interface UpdateCHManagerCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: {}
  dateOfBirth?: string
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
  auditableEntity?: {}
}

export interface CountriesViewModel {
  items?: CountryItemViewModel[]
  metaData?: {}
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
  auditableEntity?: {}
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
  gender?: {}
  dateOfBirth?: string
  locations?: UserLocationViewModel[]
  auditableEntity?: {}
}

export interface DoctorsViewModel {
  items?: UserItemViewModel[]
  metaData?: {}
}

export interface Media {
  id?: string
  mediaType?: {}
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
  auditableEntity?: {}
}

export type Platform = "Web" | "iOS" | "Android"

export type Ordinates =
  | "None"
  | "Spatial1"
  | "Spatial1"
  | "Spatial2"
  | "Spatial2"
  | "XY"
  | "Z"
  | "Z"
  | "XYZ"
  | "Spatial4"
  | "Spatial5"
  | "Spatial6"
  | "Spatial7"
  | "Spatial8"
  | "Spatial9"
  | "Spatial10"
  | "Spatial11"
  | "Spatial12"
  | "Spatial13"
  | "Spatial14"
  | "Spatial15"
  | "Spatial16"
  | "AllSpatialOrdinates"
  | "M"
  | "M"
  | "XYM"
  | "XYZM"
  | "Measure2"
  | "Measure3"
  | "Measure4"
  | "Measure5"
  | "Measure6"
  | "Measure7"
  | "Measure8"
  | "Measure9"
  | "Measure10"
  | "Measure11"
  | "Measure12"
  | "Measure13"
  | "Measure14"
  | "Measure15"
  | "Measure16"
  | "AllMeasureOrdinates"
  | "AllOrdinates"

export interface CoordinateSequence {
  dimension?: number
  measures?: number
  spatial?: number
  ordinates?: {}
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
  coordinateValue?: {}
}

export type Dimension = "Point" | "Curve" | "Surface" | "Dontcare" | "True" | "False"

export type OgcGeometryType =
  | "Point"
  | "LineString"
  | "Polygon"
  | "MultiPoint"
  | "MultiLineString"
  | "MultiPolygon"
  | "GeometryCollection"
  | "CircularString"
  | "CompoundCurve"
  | "CurvePolygon"
  | "MultiCurve"
  | "MultiSurface"
  | "Curve"
  | "Surface"
  | "PolyhedralSurface"
  | "TIN"

export type PrecisionModels = "Floating" | "FloatingSingle" | "Fixed"

export interface PrecisionModel {
  isFloating?: boolean
  maximumSignificantDigits?: number
  scale?: number
  precisionModelType?: {}
}

export interface CoordinateSequenceFactory {
  ordinates?: {}
}

export interface GeometryFactory {
  precisionModel?: {}
  coordinateSequenceFactory?: {}
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
  centre?: {}
}

export interface Geometry {
  factory?: {}
  userData?: {}
  srid?: number
  geometryType?: string
  ogcGeometryType?: {}
  precisionModel?: {}
  coordinate?: {}
  coordinates?: Coordinate[]
  numPoints?: number
  numGeometries?: number
  isSimple?: boolean
  isValid?: boolean
  isEmpty?: boolean
  area?: number
  length?: number
  centroid?: {}
  interiorPoint?: {}
  pointOnSurface?: {}
  dimension?: {}
  boundary?: {}
  boundaryDimension?: {}
  envelope?: {}
  envelopeInternal?: {}
  isRectangle?: boolean
}

export interface Point {
  coordinateSequence?: {}
  coordinates?: Coordinate[]
  numPoints?: number
  isEmpty?: boolean
  dimension?: {}
  boundaryDimension?: {}
  x?: number
  y?: number
  coordinate?: {}
  geometryType?: string
  ogcGeometryType?: {}
  boundary?: {}
  z?: number
  m?: number
  factory?: {}
  userData?: {}
  srid?: number
  precisionModel?: {}
  numGeometries?: number
  isSimple?: boolean
  isValid?: boolean
  area?: number
  length?: number
  centroid?: {}
  interiorPoint?: {}
  pointOnSurface?: {}
  envelope?: {}
  envelopeInternal?: {}
  isRectangle?: boolean
}

export interface Location {
  point?: {}
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
  device?: {}
  version?: string
  location?: {}
  auditableEntity?: {}
}

export interface Device {
  id?: string
  token?: string
  platform?: {}
  appAlert?: boolean
  eventAlert?: boolean
  noticeAlert?: boolean
  deviceLogins?: DeviceLogin[]
  auditableEntity?: {}
}

export interface UserLocation {
  point?: {}
  country?: string
  state?: string
  county?: string
  city?: string
  zipCode?: string
  address?: string
  locationType?: {}
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
  gender?: {}
  dateOfBirth?: string
  devices?: Device[]
  articles?: Article[]
  medias?: Media[]
  locations?: UserLocation[]
  auditableEntity?: {}
}

export interface Article {
  id?: string
  title?: string
  normalizedTitle?: string
  description?: string
  body?: string
  status?: {}
  userId?: string
  user?: {}
  hospitalId?: string
  hospital?: {}
  tags?: Tag[]
  medias?: Media[]
  auditableEntity?: {}
}

export interface Equipment {
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  hospitalId?: string
  hospital?: {}
  medias?: Media[]
  auditableEntity?: {}
}

export type ReviewCategory = "Services" | "Hospitality" | "Transfer" | "Etc"

export interface HospitalReview {
  patientId?: string
  patient?: {}
  hospitaltId?: string
  hospital?: {}
  body?: string
  recommended?: boolean
  reviewCategory?: {}
  rate?: number
}

export interface Department {
  id?: string
  hospitalId?: string
  hospital?: {}
  name?: string
  normalizedName?: string
  additionalInfo?: string
}

export interface SpecialtyType {
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  auditableEntity?: {}
}

export interface DoctorLanguage {
  id?: string
  doctorId?: string
  doctor?: {}
  language?: string
}

export interface DoctorEducation {
  id?: string
  doctorId?: string
  doctor?: {}
  institution?: string
  normalizedInstitution?: string
  qualification?: string
  normalizedQualification?: string
  graduationDate?: string
}

export interface DoctorPortfolio {
  id?: string
  doctorId?: string
  doctor?: {}
  name?: string
  normalizedName?: string
  description?: string
  photoBefore?: string
  photoAfter?: string
}

export interface DoctorCertificate {
  id?: string
  doctorId?: string
  doctor?: {}
  certificate?: string
  normalizedCertificate?: string
  activeFrom?: string
  activeTo?: string
}

export interface DoctorAffiliation {
  doctorId?: string
  doctor?: {}
  hospitalId?: string
  hospital?: {}
}

export interface Award {
  id?: string
  name?: string
  image?: string
  date?: string
}

export interface Doctor {
  code?: string
  startPracticeDate?: string
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
  gender?: {}
  dateOfBirth?: string
  devices?: Device[]
  articles?: Article[]
  medias?: Media[]
  locations?: UserLocation[]
  auditableEntity?: {}
}

export interface DoctorSpecialty {
  doctorId?: string
  doctor?: {}
  specialtyId?: string
  specialty?: {}
  order?: number
}

export interface Specialty {
  id?: string
  name?: string
  normalizedName?: string
  description?: string
  specialtyTypeId?: string
  specialtyType?: {}
  hospitalSpecialties?: HospitalSpecialty[]
  doctorSpecialties?: DoctorSpecialty[]
  auditableEntity?: {}
}

export type Procedure = "Treatment" | "Diagnostic"

export type AssessmentType = "Boolean" | "Text"

export interface AssessmentAnswer {
  assessmentId?: string
  assessment?: {}
  bookingId?: string
  booking?: {}
  textAnswer?: string
  booleanAnswer?: boolean
}

export interface Assessment {
  id?: string
  serviceId?: string
  service?: {}
  question?: string
  normalizedQuestion?: string
  answerType?: {}
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
  hospitalSpecialty?: {}
  procedure?: {}
  minPrice?: number
  maxPrice?: number
  priceReuqest?: boolean
  order?: number
  assessments?: Assessment[]
  auditableEntity?: {}
}

export interface HospitalSpecialty {
  hospitalId?: string
  hospital?: {}
  specialtyId?: string
  specialty?: {}
  order?: number
  services?: Service[]
  auditableEntity?: {}
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
  hospital?: {}
  accreditationId?: string
  accreditation?: {}
}

export type VendorType = "Stripe" | "WeChat"

export interface Account {
  id?: string
  vendor?: {}
  auditableEntity?: {}
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
  gender?: {}
  dateOfBirth?: string
  devices?: Device[]
  articles?: Article[]
  medias?: Media[]
  locations?: UserLocation[]
  auditableEntity?: {}
}

export interface ManagerAffiliation {
  managerId?: string
  manager?: {}
  hospitalId?: string
  hospital?: {}
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
  country?: {}
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
  location?: {}
  auditableEntity?: {}
}

export type PackageStatus = "New" | "Standard"

export interface Package {
  id?: string
  name?: string
  normalizedName?: string
  hospitalId?: string
  hospital?: {}
  packageStatus?: {}
  accomodation?: string
  trnasfer?: string
  bonus?: string
  packagePrice?: number
  managers?: Manager[]
  services?: Service[]
  bookings?: Booking[]
  auditableEntity?: {}
}

export type RejectReason =
  | "AssessmentNotCompleted"
  | "PaymentNotCompleted"
  | "ScheduleNotAvailable"
  | "OtherReason"

export interface Customer {
  id?: string
  vendor?: {}
  patientId?: string
  patient?: {}
  payments?: Payment[]
  auditableEntity?: {}
}

export type ChargeStatus = "Pending" | "Succeeded" | "Failed"

export type RefundStatus = "Pending" | "Succeeded" | "Failed"

export type PaymentStatus = "Unpaid" | "Paid" | "RefundRequested" | "Refunded"

export interface ChangeLog {
  id?: string
  status?: number
  actorId?: string
  createdDate?: string
}

export interface Payment {
  id?: string
  patientId?: string
  patient?: {}
  customerId?: string
  customer?: {}
  bookingId?: string
  booking?: {}
  chargeId?: string
  refundId?: string
  chargeStatus?: {}
  refundStatus?: {}
  paymentStatus?: {}
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
  patient?: {}
  bookingId?: string
  booking?: {}
  body?: string
  medias?: Media[]
  auditableEntity?: {}
}

export interface Booking {
  id?: string
  patientId?: string
  patient?: {}
  packageId?: string
  package?: {}
  fee?: number
  applicationFee?: number
  approximateDateStart?: string
  approximateDateEnd?: string
  confirmedDateStart?: string
  confirmedDateEnd?: string
  bookingStatus?: {}
  rejectReason?: {}
  isOpen?: boolean
  payments?: Payment[]
  bookingComments?: BookingComment[]
  assessmentAnswers?: AssessmentAnswer[]
  bookingStatusChangeLogs?: ChangeLog[]
  auditableEntity?: {}
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
  gender?: {}
  dateOfBirth?: string
  devices?: Device[]
  articles?: Article[]
  medias?: Media[]
  locations?: UserLocation[]
  auditableEntity?: {}
}

export interface DoctorReview {
  patientId?: string
  patient?: {}
  doctorId?: string
  doctor?: {}
  body?: string
  recommended?: boolean
  reviewCategory?: {}
  rate?: number
}

export interface AwardViewModel {
  id?: string
  name?: string
  image?: string
  date?: string
}

export interface DoctorViewModel {
  code?: string
  startPracticeDate?: string
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
  gender?: {}
  dateOfBirth?: string
  auditableEntity?: {}
}

export interface UpdateDoctorCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: {}
  dateOfBirth?: string
  locations?: UserLocationViewModel[]
}

export interface CreateEquipmentCommand {
  name?: string
  description?: string
  medias?: MediaViewModel[]
  auditableEntity?: {}
}

export interface EquipmentViewModel {
  id?: string
  name?: string
  description?: string
  hospitalId?: string
  hospitalName?: string
  medias?: MediaViewModel[]
  auditableEntity?: {}
}

export interface UpdateEquipmentCommand {
  name?: string
  description?: string
  hospitalId?: string
  hospitalName?: string
  medias?: MediaViewModel[]
  auditableEntity?: {}
}

export interface EquipmentItemViewModel {
  id?: string
  name?: string
  description?: string
  hospitalId?: string
  hospitalName?: string
  medias?: MediaViewModel[]
  auditableEntity?: {}
}

export interface EquipmentsViewModel {
  items?: EquipmentItemViewModel[]
  metaData?: {}
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
  location?: {}
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
  location?: {}
  auditableEntity?: {}
}

export interface HospitalsViewModel {
  items?: HospitalItemViewModel[]
  metaData?: {}
}

export interface HospitalSpecialtyItemViewModel {
  hospitalId?: string
  hospitalName?: string
  specialtyId?: string
  specialtyName?: string
  specialtyTypeId?: string
  specialtyTypeName?: string
  order?: number
  created?: string
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
  location?: {}
  auditableEntity?: {}
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
  location?: {}
  auditableEntity?: {}
}

export interface HospitalSpecialtyViewModel {
  hospitalId?: string
  hospitalName?: string
  specialtyId?: string
  specialtyName?: string
  specialtyTypeId?: string
  specialtyTypeName?: string
  order?: number
  created?: string
}

export interface UpdateHospitalSpecialtySequenceCommand {
  hospitalSpecialtySequence?: string[]
}

export interface HospitalSpecialtiesViewModel {
  items?: HospitalSpecialtyItemViewModel[]
  metaData?: {}
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
  gender?: {}
  dateOfBirth?: string
  locations?: UserLocationViewModel[]
  auditableEntity?: {}
}

export interface ManagersViewModel {
  items?: UserItemViewModel[]
  metaData?: {}
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
  gender?: {}
  dateOfBirth?: string
  auditableEntity?: {}
}

export interface UpdateManagerCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: {}
  dateOfBirth?: string
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
  gender?: {}
  dateOfBirth?: string
  locations?: UserLocationViewModel[]
  auditableEntity?: {}
}

export interface PartnersViewModel {
  items?: UserItemViewModel[]
  metaData?: {}
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
  gender?: {}
  dateOfBirth?: string
  auditableEntity?: {}
}

export interface UpdatePartnerCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: {}
  dateOfBirth?: string
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
  gender?: {}
  dateOfBirth?: string
  locations?: UserLocationViewModel[]
  auditableEntity?: {}
}

export interface PatientsViewModel {
  items?: UserItemViewModel[]
  metaData?: {}
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
  gender?: {}
  dateOfBirth?: string
  auditableEntity?: {}
}

export interface UpdatePatientCommand {
  firstName?: string
  lastName?: string
  photo?: string
  photoThumbnail?: string
  gender?: {}
  dateOfBirth?: string
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
  gender?: {}
  dateOfBirth?: string
  auditableEntity?: {}
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
  procedure?: {}
}

export interface ServiceViewModel {
  hospitalId?: string
  specialtyId?: string
  specialtyTypeId?: string
  specialtyTypeName?: string
  id?: string
  name?: string
  description?: string
  procedure?: {}
  minPrice?: number
  maxPrice?: number
  priceReuqest?: boolean
  order?: number
  auditableEntity?: {}
}

export interface UpdateServiceCommand {
  specialtyTypeId?: string
  specialtyTypeName?: string
  name?: string
  description?: string
  procedure?: {}
  minPrice?: number
  maxPrice?: number
  priceReuqest?: boolean
  order?: number
  auditableEntity?: {}
}

export interface UpdateServiceSequenceCommand {
  serviceSequence?: string[]
}

export interface ServiceItemViewModel {
  id?: string
  name?: string
  description?: string
  procedure?: {}
  minPrice?: number
  maxPrice?: number
  priceReuqest?: boolean
  order?: number
  auditableEntity?: {}
}

export interface ServicesViewModel {
  items?: ServiceItemViewModel[]
  metaData?: {}
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
  auditableEntity?: {}
}

export interface SpecialtiesViewModel {
  items?: SpecialtyItemViewModel[]
  metaData?: {}
}

export interface SpecialtyViewModel {
  id?: string
  name?: string
  description?: string
  specialtyTypeId?: string
  specialtyTypeName?: string
  auditableEntity?: {}
}

export interface UpdateSpecialtyCommand {
  name?: string
  description?: string
  specialtyTypeName?: string
  auditableEntity?: {}
}
