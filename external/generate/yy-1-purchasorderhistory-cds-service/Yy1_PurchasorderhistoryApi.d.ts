import { Yy1_Purchasorderhistory } from './Yy1_Purchasorderhistory';
import { Yy1_PurchasorderhistoryRequestBuilder } from './Yy1_PurchasorderhistoryRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, EdmTypeField, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Yy1_PurchasorderhistoryApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Yy1_Purchasorderhistory<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Yy1_Purchasorderhistory;
    requestBuilder(): Yy1_PurchasorderhistoryRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Yy1_Purchasorderhistory<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Yy1_Purchasorderhistory<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Yy1_Purchasorderhistory, DeSerializersT>;
    private _schema?;
    get schema(): {
        PURCHASE_ORDER: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PURCHASE_ORDER_ITEM: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ACCOUNT_ASSIGNMENT_NUMBER: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PURCHASING_HISTORY_DOCUMENT_TYPE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PURCHASING_HISTORY_DOCUMENT_YEAR: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PURCHASING_HISTORY_DOCUMENT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PURCHASING_HISTORY_DOCUMENT_ITEM: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PURCHASING_HISTORY_CATEGORY: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        GOODS_MOVEMENT_TYPE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        POSTING_DATE: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CURRENCY: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DEBIT_CREDIT_CODE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_COMPLETELY_DELIVERED: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        REFERENCE_DOCUMENT_FISCAL_YEAR: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REFERENCE_DOCUMENT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REFERENCE_DOCUMENT_ITEM: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        MATERIAL: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PLANT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        RVSL_OF_GOODS_RECEIPT_IS_ALLOWED: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        PRICING_DOCUMENT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_CODE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DOCUMENT_DATE: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        INVENTORY_VALUATION_TYPE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DOCUMENT_REFERENCE_ID: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELIVERY_QUANTITY_UNIT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        MANUFACTURER_MATERIAL: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_DOCUMENT_CREATION_DATE: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        QUANTITY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        PUR_ORD_AMOUNT_IN_COMPANY_CODE_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        PURCHASE_ORDER_AMOUNT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        QTY_IN_PURCHASE_ORDER_PRICE_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        GRIR_ACCT_CLRG_AMT_IN_CO_CODE_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        GDS_RCPT_BLKD_STK_QTY_IN_ORD_QTY_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        GDS_RCPT_BLKD_STK_QTY_IN_ORD_PRC_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        INVOICE_AMT_IN_CO_CODE_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        SHIPG_INSTRN_SUPPLIER_COMPLIANCE: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INVOICE_AMOUNT_IN_FRGN_CURRENCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        QUANTITY_IN_DELIVERY_QTY_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        GRIR_ACCT_CLRG_AMT_IN_TRANSAC_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        QUANTITY_IN_BASE_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        GRIR_ACCT_CLRG_AMT_IN_ORD_TRNSAC_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        INVOICE_AMT_IN_PUR_ORD_TRANSAC_CRCY: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        VLTD_GDS_RCPT_BLKD_STK_QTY_IN_ORD_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        VLTD_GDS_RCPT_BLKD_QTY_IN_ORD_PRC_UNIT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        IS_TO_BE_ACCEPTED_AT_ORIGIN: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        EXCHANGE_RATE_DIFFERENCE_AMOUNT: OrderableEdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        DOCUMENT_CURRENCY: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COMPANY_CODE_CURRENCY: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BASE_UNIT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PURCHASE_ORDER_QUANTITY_UNIT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORDER_PRICE_UNIT: EdmTypeField<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<Yy1_Purchasorderhistory<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Yy1_PurchasorderhistoryApi.d.ts.map