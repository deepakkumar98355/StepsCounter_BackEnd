"use strict";

export namespace ResponseModel {
  export class VerticalTransactionDataModel {
    customerName: string;
    dateOfService: string;
    dateOfPurchase: string;
    itemUuid: string;
    uuid: string;
    orderItemReferenceNo: string;
    status: string;
    itemType: string;
  }

  export class RefundResponse {
    amount: number;
    arn: any;
    refundInitiationDate: string;
  }

  export class RefundResponseDataModel {
    Source: string;
    amount: any;
    refundInitiationDate: any;
    arn: string;
    menuOption: any;
    subMenuOptions: any;
    sendNeftLink: boolean;
    status: string;
    isGft: boolean;
    callDiff: any;
    connectToAgent: boolean;
    isRefundTatCrossed: boolean;
  }

  export class preference {
    preferredLang: string;
  }

  export class getDefaultLanguageAndMenuRespModel {
    preference: preference;
    menuOption: any;
    subMenuOptions: any;
  }

  export class predictTransactionModel {
    orderDetails: orderDetailsModel;
    menuOption: any;
  }

  export class orderDetailsModel {
    orderItemId: string;
    orderId: string;
    tin: string;
    sourceName: string;
    destinationName: string;
    dateofJourney: string;
    status: string;
    bookTocallDiff: string;
    dateOfIssue: string;
  }
  export class UpcomingJourneyResponseBO {
    orderCount: number;
    connectToAgent: boolean;
  }

  export class DefaultResponseBO {
    statusCode: number;
    data: any;
    errorMessage: string;
  }

  export class CaseDetails {
    caseNumber: string;
    status: string;
    issueType: string;
    subIssueType: string;
    notes: string;
    tatVal: string;
    createdDateTime: number;
    lastModifiedTime: number;
    trip: string;
    tin: string;
    tatcrossed: boolean;
    audioPrompt: string;
    playingTATRequired: boolean;
    isExceptionalFlow: boolean;
  }

  export class OpenCaseCountResponse {
    opencasecount: number;
    casesData: any;
    connectToAgent: any;
  }

  export class CaseCreationResposne {
    casenumber: string;
    oldcasenumber: string;
    tatval: string;
    errorDescription: string;
  }

  export class RefundStatusModel {
    walletDetails: Array<Object>;
    onlineDetails: Array<Object>;
    cumulativeDetails: any;
    arn: any;
    Source: String;
    Destination: String;
    status: string;
    sendNeftLink: boolean;
    refundInitiationDate: number;
    connectToAgent: boolean;
    isRefundTatCrossed: boolean;
    amount: number;
    finalTransactionStatus: String;
    cardLastFour: any;
    originalPaymentSource: String;
    paymentGroup: String;
    elapsedDays: number;
    currency: string;
  }

  export class CaseDetailsFromDB {
    caseNumber: string;
    caseOrigin: string;
    bookingEmail: string;
    tin: string;
    caseNotes: string;
    caseStatus: string;
    orderId: string;
    Issue: string;
    subissue: string;
    businessType: string;
    myDeskId: string;
    bookingMobileNo: string;
    country: string;
    salesChannel: string;
    parentId: string;
    source: string;
    destination: string;
    businessUnit: String;
  }

  export class StatusBasedCaseModel {
    caseStatus: string
    issueType: string
    doj: any
    createdDate: any
    notes: string
    tatValue: any
  }
}
