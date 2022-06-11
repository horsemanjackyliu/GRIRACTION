/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Purchasorderhistory } from './Yy1_Purchasorderhistory';
import { Yy1_PurchasorderhistoryRequestBuilder } from './Yy1_PurchasorderhistoryRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, EdmTypeField, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class Yy1_PurchasorderhistoryApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      Yy1_Purchasorderhistory<
        DeSerializersT
      >, 
      DeSerializersT
    > {
  public deSerializers: DeSerializersT;

  constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
      
    };

  _addNavigationProperties(
      linkedApis: [
        
      ]): this {
        this.navigationPropertyFields = {
          
        };
        return this;
      }
  
  entityConstructor = Yy1_Purchasorderhistory;
  
  requestBuilder(): Yy1_PurchasorderhistoryRequestBuilder<
    DeSerializersT
  > {
    return new Yy1_PurchasorderhistoryRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    Yy1_Purchasorderhistory<
      DeSerializersT
    >,
    DeSerializersT
  > {
    return entityBuilder(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
  Yy1_Purchasorderhistory<
      DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Yy1_Purchasorderhistory, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(Yy1_Purchasorderhistory, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCHASE_ORDER: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
PURCHASE_ORDER_ITEM: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
ACCOUNT_ASSIGNMENT_NUMBER: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
PURCHASING_HISTORY_DOCUMENT_TYPE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
PURCHASING_HISTORY_DOCUMENT_YEAR: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
PURCHASING_HISTORY_DOCUMENT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
PURCHASING_HISTORY_DOCUMENT_ITEM: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
PURCHASING_HISTORY_CATEGORY: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
GOODS_MOVEMENT_TYPE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
POSTING_DATE: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
CURRENCY: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
DEBIT_CREDIT_CODE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
IS_COMPLETELY_DELIVERED: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
REFERENCE_DOCUMENT_FISCAL_YEAR: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
REFERENCE_DOCUMENT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
REFERENCE_DOCUMENT_ITEM: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MATERIAL: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PLANT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
RVSL_OF_GOODS_RECEIPT_IS_ALLOWED: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
PRICING_DOCUMENT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
TAX_CODE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
DOCUMENT_DATE: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
INVENTORY_VALUATION_TYPE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
DOCUMENT_REFERENCE_ID: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
DELIVERY_QUANTITY_UNIT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
MANUFACTURER_MATERIAL: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ACCOUNTING_DOCUMENT_CREATION_DATE: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
QUANTITY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
PUR_ORD_AMOUNT_IN_COMPANY_CODE_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
PURCHASE_ORDER_AMOUNT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
QTY_IN_PURCHASE_ORDER_PRICE_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
GRIR_ACCT_CLRG_AMT_IN_CO_CODE_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
GDS_RCPT_BLKD_STK_QTY_IN_ORD_QTY_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
GDS_RCPT_BLKD_STK_QTY_IN_ORD_PRC_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
INVOICE_AMT_IN_CO_CODE_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
SHIPG_INSTRN_SUPPLIER_COMPLIANCE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
INVOICE_AMOUNT_IN_FRGN_CURRENCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
QUANTITY_IN_DELIVERY_QTY_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
GRIR_ACCT_CLRG_AMT_IN_TRANSAC_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
QUANTITY_IN_BASE_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
GRIR_ACCT_CLRG_AMT_IN_ORD_TRNSAC_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
INVOICE_AMT_IN_PUR_ORD_TRANSAC_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
VLTD_GDS_RCPT_BLKD_STK_QTY_IN_ORD_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
VLTD_GDS_RCPT_BLKD_QTY_IN_ORD_PRC_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
IS_TO_BE_ACCEPTED_AT_ORIGIN: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Boolean', true, true>,
EXCHANGE_RATE_DIFFERENCE_AMOUNT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
DOCUMENT_CURRENCY: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
COMPANY_CODE_CURRENCY: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
BASE_UNIT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PURCHASE_ORDER_QUANTITY_UNIT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ORDER_PRICE_UNIT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ALL_FIELDS: AllFields<Yy1_Purchasorderhistory<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the [[purchaseOrder]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PURCHASE_ORDER: fieldBuilder.buildEdmTypeField('PurchaseOrder', 'Edm.String', false),
/**
 * Static representation of the [[purchaseOrderItem]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PURCHASE_ORDER_ITEM: fieldBuilder.buildEdmTypeField('PurchaseOrderItem', 'Edm.String', false),
/**
 * Static representation of the [[accountAssignmentNumber]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNT_ASSIGNMENT_NUMBER: fieldBuilder.buildEdmTypeField('AccountAssignmentNumber', 'Edm.String', false),
/**
 * Static representation of the [[purchasingHistoryDocumentType]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PURCHASING_HISTORY_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField('PurchasingHistoryDocumentType', 'Edm.String', false),
/**
 * Static representation of the [[purchasingHistoryDocumentYear]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PURCHASING_HISTORY_DOCUMENT_YEAR: fieldBuilder.buildEdmTypeField('PurchasingHistoryDocumentYear', 'Edm.String', false),
/**
 * Static representation of the [[purchasingHistoryDocument]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PURCHASING_HISTORY_DOCUMENT: fieldBuilder.buildEdmTypeField('PurchasingHistoryDocument', 'Edm.String', false),
/**
 * Static representation of the [[purchasingHistoryDocumentItem]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PURCHASING_HISTORY_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('PurchasingHistoryDocumentItem', 'Edm.String', false),
/**
 * Static representation of the [[purchasingHistoryCategory]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PURCHASING_HISTORY_CATEGORY: fieldBuilder.buildEdmTypeField('PurchasingHistoryCategory', 'Edm.String', true),
/**
 * Static representation of the [[goodsMovementType]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
GOODS_MOVEMENT_TYPE: fieldBuilder.buildEdmTypeField('GoodsMovementType', 'Edm.String', true),
/**
 * Static representation of the [[postingDate]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
POSTING_DATE: fieldBuilder.buildEdmTypeField('PostingDate', 'Edm.DateTime', true),
/**
 * Static representation of the [[currency]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true),
/**
 * Static representation of the [[debitCreditCode]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DEBIT_CREDIT_CODE: fieldBuilder.buildEdmTypeField('DebitCreditCode', 'Edm.String', true),
/**
 * Static representation of the [[isCompletelyDelivered]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
IS_COMPLETELY_DELIVERED: fieldBuilder.buildEdmTypeField('IsCompletelyDelivered', 'Edm.Boolean', true),
/**
 * Static representation of the [[referenceDocumentFiscalYear]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
REFERENCE_DOCUMENT_FISCAL_YEAR: fieldBuilder.buildEdmTypeField('ReferenceDocumentFiscalYear', 'Edm.String', true),
/**
 * Static representation of the [[referenceDocument]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
REFERENCE_DOCUMENT: fieldBuilder.buildEdmTypeField('ReferenceDocument', 'Edm.String', true),
/**
 * Static representation of the [[referenceDocumentItem]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
REFERENCE_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('ReferenceDocumentItem', 'Edm.String', true),
/**
 * Static representation of the [[material]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MATERIAL: fieldBuilder.buildEdmTypeField('Material', 'Edm.String', true),
/**
 * Static representation of the [[plant]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', true),
/**
 * Static representation of the [[rvslOfGoodsReceiptIsAllowed]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
RVSL_OF_GOODS_RECEIPT_IS_ALLOWED: fieldBuilder.buildEdmTypeField('RvslOfGoodsReceiptIsAllowed', 'Edm.Boolean', true),
/**
 * Static representation of the [[pricingDocument]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PRICING_DOCUMENT: fieldBuilder.buildEdmTypeField('PricingDocument', 'Edm.String', true),
/**
 * Static representation of the [[taxCode]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
/**
 * Static representation of the [[documentDate]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DOCUMENT_DATE: fieldBuilder.buildEdmTypeField('DocumentDate', 'Edm.DateTime', true),
/**
 * Static representation of the [[inventoryValuationType]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
INVENTORY_VALUATION_TYPE: fieldBuilder.buildEdmTypeField('InventoryValuationType', 'Edm.String', true),
/**
 * Static representation of the [[documentReferenceId]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DOCUMENT_REFERENCE_ID: fieldBuilder.buildEdmTypeField('DocumentReferenceID', 'Edm.String', true),
/**
 * Static representation of the [[deliveryQuantityUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DELIVERY_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('DeliveryQuantityUnit', 'Edm.String', true),
/**
 * Static representation of the [[manufacturerMaterial]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
MANUFACTURER_MATERIAL: fieldBuilder.buildEdmTypeField('ManufacturerMaterial', 'Edm.String', true),
/**
 * Static representation of the [[accountingDocumentCreationDate]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ACCOUNTING_DOCUMENT_CREATION_DATE: fieldBuilder.buildEdmTypeField('AccountingDocumentCreationDate', 'Edm.DateTime', true),
/**
 * Static representation of the [[quantity]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY: fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Decimal', true),
/**
 * Static representation of the [[purOrdAmountInCompanyCodeCrcy]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PUR_ORD_AMOUNT_IN_COMPANY_CODE_CRCY: fieldBuilder.buildEdmTypeField('PurOrdAmountInCompanyCodeCrcy', 'Edm.Decimal', true),
/**
 * Static representation of the [[purchaseOrderAmount]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PURCHASE_ORDER_AMOUNT: fieldBuilder.buildEdmTypeField('PurchaseOrderAmount', 'Edm.Decimal', true),
/**
 * Static representation of the [[qtyInPurchaseOrderPriceUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QTY_IN_PURCHASE_ORDER_PRICE_UNIT: fieldBuilder.buildEdmTypeField('QtyInPurchaseOrderPriceUnit', 'Edm.Decimal', true),
/**
 * Static representation of the [[grirAcctClrgAmtInCoCodeCrcy]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
GRIR_ACCT_CLRG_AMT_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('GRIRAcctClrgAmtInCoCodeCrcy', 'Edm.Decimal', true),
/**
 * Static representation of the [[gdsRcptBlkdStkQtyInOrdQtyUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
GDS_RCPT_BLKD_STK_QTY_IN_ORD_QTY_UNIT: fieldBuilder.buildEdmTypeField('GdsRcptBlkdStkQtyInOrdQtyUnit', 'Edm.Decimal', true),
/**
 * Static representation of the [[gdsRcptBlkdStkQtyInOrdPrcUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
GDS_RCPT_BLKD_STK_QTY_IN_ORD_PRC_UNIT: fieldBuilder.buildEdmTypeField('GdsRcptBlkdStkQtyInOrdPrcUnit', 'Edm.Decimal', true),
/**
 * Static representation of the [[invoiceAmtInCoCodeCrcy]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
INVOICE_AMT_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('InvoiceAmtInCoCodeCrcy', 'Edm.Decimal', true),
/**
 * Static representation of the [[shipgInstrnSupplierCompliance]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SHIPG_INSTRN_SUPPLIER_COMPLIANCE: fieldBuilder.buildEdmTypeField('ShipgInstrnSupplierCompliance', 'Edm.String', true),
/**
 * Static representation of the [[invoiceAmountInFrgnCurrency]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
INVOICE_AMOUNT_IN_FRGN_CURRENCY: fieldBuilder.buildEdmTypeField('InvoiceAmountInFrgnCurrency', 'Edm.Decimal', true),
/**
 * Static representation of the [[quantityInDeliveryQtyUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY_IN_DELIVERY_QTY_UNIT: fieldBuilder.buildEdmTypeField('QuantityInDeliveryQtyUnit', 'Edm.Decimal', true),
/**
 * Static representation of the [[grirAcctClrgAmtInTransacCrcy]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
GRIR_ACCT_CLRG_AMT_IN_TRANSAC_CRCY: fieldBuilder.buildEdmTypeField('GRIRAcctClrgAmtInTransacCrcy', 'Edm.Decimal', true),
/**
 * Static representation of the [[quantityInBaseUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY_IN_BASE_UNIT: fieldBuilder.buildEdmTypeField('QuantityInBaseUnit', 'Edm.Decimal', true),
/**
 * Static representation of the [[grirAcctClrgAmtInOrdTrnsacCrcy]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
GRIR_ACCT_CLRG_AMT_IN_ORD_TRNSAC_CRCY: fieldBuilder.buildEdmTypeField('GRIRAcctClrgAmtInOrdTrnsacCrcy', 'Edm.Decimal', true),
/**
 * Static representation of the [[invoiceAmtInPurOrdTransacCrcy]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
INVOICE_AMT_IN_PUR_ORD_TRANSAC_CRCY: fieldBuilder.buildEdmTypeField('InvoiceAmtInPurOrdTransacCrcy', 'Edm.Decimal', true),
/**
 * Static representation of the [[vltdGdsRcptBlkdStkQtyInOrdUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
VLTD_GDS_RCPT_BLKD_STK_QTY_IN_ORD_UNIT: fieldBuilder.buildEdmTypeField('VltdGdsRcptBlkdStkQtyInOrdUnit', 'Edm.Decimal', true),
/**
 * Static representation of the [[vltdGdsRcptBlkdQtyInOrdPrcUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
VLTD_GDS_RCPT_BLKD_QTY_IN_ORD_PRC_UNIT: fieldBuilder.buildEdmTypeField('VltdGdsRcptBlkdQtyInOrdPrcUnit', 'Edm.Decimal', true),
/**
 * Static representation of the [[isToBeAcceptedAtOrigin]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
IS_TO_BE_ACCEPTED_AT_ORIGIN: fieldBuilder.buildEdmTypeField('IsToBeAcceptedAtOrigin', 'Edm.Boolean', true),
/**
 * Static representation of the [[exchangeRateDifferenceAmount]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
EXCHANGE_RATE_DIFFERENCE_AMOUNT: fieldBuilder.buildEdmTypeField('ExchangeRateDifferenceAmount', 'Edm.Decimal', true),
/**
 * Static representation of the [[documentCurrency]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DOCUMENT_CURRENCY: fieldBuilder.buildEdmTypeField('DocumentCurrency', 'Edm.String', true),
/**
 * Static representation of the [[companyCodeCurrency]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
COMPANY_CODE_CURRENCY: fieldBuilder.buildEdmTypeField('CompanyCodeCurrency', 'Edm.String', true),
/**
 * Static representation of the [[baseUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
BASE_UNIT: fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', true),
/**
 * Static representation of the [[purchaseOrderQuantityUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PURCHASE_ORDER_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('PurchaseOrderQuantityUnit', 'Edm.String', true),
/**
 * Static representation of the [[orderPriceUnit]] property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ORDER_PRICE_UNIT: fieldBuilder.buildEdmTypeField('OrderPriceUnit', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', Yy1_Purchasorderhistory) 
  };
    }
  
    return this._schema;
  }
}
