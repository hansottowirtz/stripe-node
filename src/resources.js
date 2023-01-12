// File generated from our OpenAPI spec

'use strict';

const resourceNamespace = require('./ResourceNamespace');

module.exports = {
  // Support Accounts for consistency, Account for backwards compatibility
  Account: require('./resources/Accounts'),
  AccountLinks: require('./resources/AccountLinks'),
  Accounts: require('./resources/Accounts'),
  AccountSessions: require('./resources/AccountSessions'),
  ApplePayDomains: require('./resources/ApplePayDomains'),
  ApplicationFees: require('./resources/ApplicationFees'),
  Balance: require('./resources/Balance'),
  BalanceTransactions: require('./resources/BalanceTransactions'),
  Charges: require('./resources/Charges'),
  CountrySpecs: require('./resources/CountrySpecs'),
  Coupons: require('./resources/Coupons'),
  CreditNotes: require('./resources/CreditNotes'),
  Customers: require('./resources/Customers'),
  Disputes: require('./resources/Disputes'),
  EphemeralKeys: require('./resources/EphemeralKeys'),
  Events: require('./resources/Events'),
  ExchangeRates: require('./resources/ExchangeRates'),
  FileLinks: require('./resources/FileLinks'),
  Files: require('./resources/Files'),
  InvoiceItems: require('./resources/InvoiceItems'),
  Invoices: require('./resources/Invoices'),
  Mandates: require('./resources/Mandates'),
  OAuth: require('./resources/OAuth'),
  Orders: require('./resources/Orders'),
  PaymentIntents: require('./resources/PaymentIntents'),
  PaymentLinks: require('./resources/PaymentLinks'),
  PaymentMethods: require('./resources/PaymentMethods'),
  Payouts: require('./resources/Payouts'),
  Plans: require('./resources/Plans'),
  Prices: require('./resources/Prices'),
  Products: require('./resources/Products'),
  PromotionCodes: require('./resources/PromotionCodes'),
  QuotePhases: require('./resources/QuotePhases'),
  Quotes: require('./resources/Quotes'),
  Refunds: require('./resources/Refunds'),
  Reviews: require('./resources/Reviews'),
  SetupAttempts: require('./resources/SetupAttempts'),
  SetupIntents: require('./resources/SetupIntents'),
  ShippingRates: require('./resources/ShippingRates'),
  Sources: require('./resources/Sources'),
  SubscriptionItems: require('./resources/SubscriptionItems'),
  Subscriptions: require('./resources/Subscriptions'),
  SubscriptionSchedules: require('./resources/SubscriptionSchedules'),
  TaxCodes: require('./resources/TaxCodes'),
  TaxRates: require('./resources/TaxRates'),
  Tokens: require('./resources/Tokens'),
  Topups: require('./resources/Topups'),
  Transfers: require('./resources/Transfers'),
  WebhookEndpoints: require('./resources/WebhookEndpoints'),
  Apps: resourceNamespace('apps', {
    Secrets: require('./resources/Apps/Secrets'),
  }),
  BillingPortal: resourceNamespace('billingPortal', {
    Configurations: require('./resources/BillingPortal/Configurations'),
    Sessions: require('./resources/BillingPortal/Sessions'),
  }),
  Capital: resourceNamespace('capital', {
    FinancingOffers: require('./resources/Capital/FinancingOffers'),
    FinancingSummary: require('./resources/Capital/FinancingSummary'),
    FinancingTransactions: require('./resources/Capital/FinancingTransactions'),
  }),
  Checkout: resourceNamespace('checkout', {
    Sessions: require('./resources/Checkout/Sessions'),
  }),
  FinancialConnections: resourceNamespace('financialConnections', {
    Accounts: require('./resources/FinancialConnections/Accounts'),
    Sessions: require('./resources/FinancialConnections/Sessions'),
  }),
  GiftCards: resourceNamespace('giftCards', {
    Cards: require('./resources/GiftCards/Cards'),
    Transactions: require('./resources/GiftCards/Transactions'),
  }),
  Identity: resourceNamespace('identity', {
    VerificationReports: require('./resources/Identity/VerificationReports'),
    VerificationSessions: require('./resources/Identity/VerificationSessions'),
  }),
  Issuing: resourceNamespace('issuing', {
    Authorizations: require('./resources/Issuing/Authorizations'),
    Cardholders: require('./resources/Issuing/Cardholders'),
    Cards: require('./resources/Issuing/Cards'),
    Disputes: require('./resources/Issuing/Disputes'),
    Transactions: require('./resources/Issuing/Transactions'),
  }),
  Radar: resourceNamespace('radar', {
    EarlyFraudWarnings: require('./resources/Radar/EarlyFraudWarnings'),
    ValueListItems: require('./resources/Radar/ValueListItems'),
    ValueLists: require('./resources/Radar/ValueLists'),
  }),
  Reporting: resourceNamespace('reporting', {
    ReportRuns: require('./resources/Reporting/ReportRuns'),
    ReportTypes: require('./resources/Reporting/ReportTypes'),
  }),
  Sigma: resourceNamespace('sigma', {
    ScheduledQueryRuns: require('./resources/Sigma/ScheduledQueryRuns'),
  }),
  Tax: resourceNamespace('tax', {
    Calculations: require('./resources/Tax/Calculations'),
    Registrations: require('./resources/Tax/Registrations'),
    Transactions: require('./resources/Tax/Transactions'),
  }),
  Terminal: resourceNamespace('terminal', {
    Configurations: require('./resources/Terminal/Configurations'),
    ConnectionTokens: require('./resources/Terminal/ConnectionTokens'),
    Locations: require('./resources/Terminal/Locations'),
    Readers: require('./resources/Terminal/Readers'),
  }),
  TestHelpers: resourceNamespace('testHelpers', {
    Customers: require('./resources/TestHelpers/Customers'),
    Refunds: require('./resources/TestHelpers/Refunds'),
    TestClocks: require('./resources/TestHelpers/TestClocks'),
    Issuing: resourceNamespace('issuing', {
      Cards: require('./resources/TestHelpers/Issuing/Cards'),
    }),
    Terminal: resourceNamespace('terminal', {
      Readers: require('./resources/TestHelpers/Terminal/Readers'),
    }),
    Treasury: resourceNamespace('treasury', {
      InboundTransfers: require('./resources/TestHelpers/Treasury/InboundTransfers'),
      OutboundPayments: require('./resources/TestHelpers/Treasury/OutboundPayments'),
      OutboundTransfers: require('./resources/TestHelpers/Treasury/OutboundTransfers'),
      ReceivedCredits: require('./resources/TestHelpers/Treasury/ReceivedCredits'),
      ReceivedDebits: require('./resources/TestHelpers/Treasury/ReceivedDebits'),
    }),
  }),
  Treasury: resourceNamespace('treasury', {
    CreditReversals: require('./resources/Treasury/CreditReversals'),
    DebitReversals: require('./resources/Treasury/DebitReversals'),
    FinancialAccounts: require('./resources/Treasury/FinancialAccounts'),
    InboundTransfers: require('./resources/Treasury/InboundTransfers'),
    OutboundPayments: require('./resources/Treasury/OutboundPayments'),
    OutboundTransfers: require('./resources/Treasury/OutboundTransfers'),
    ReceivedCredits: require('./resources/Treasury/ReceivedCredits'),
    ReceivedDebits: require('./resources/Treasury/ReceivedDebits'),
    TransactionEntries: require('./resources/Treasury/TransactionEntries'),
    Transactions: require('./resources/Treasury/Transactions'),
  }),
};
