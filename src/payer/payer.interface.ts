export interface Payer {
    // TODO transform ID types to number? or specific type
    id: number;
    code: string;
    description: string;
    is_active: boolean;
  }