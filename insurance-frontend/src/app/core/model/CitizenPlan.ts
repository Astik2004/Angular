export interface CitizenPlan {
  citizenId?: number; // Primary Key [cite: 28]
  citizenName: string;
  gender: string;
  planName: string;
  planStatus: string;
  planStartDate?: string;
  planEndDate?: string;
  benefitAmount?: number;
  denialReason?: string;
  terminatedDate?: string;
  terminationReason?: string;
}