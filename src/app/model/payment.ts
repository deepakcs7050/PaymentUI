export interface Payment {
    credit_card_number: string;
    card_holder: string;
    expiration_Date:Date;
    security_code: string;
    amount: number;
}