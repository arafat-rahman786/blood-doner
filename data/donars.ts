export type Donor = {
  id: string;
  name: string;
  bloodGroup: string;
  division: string;
  district: string;
  upazila: string;
  phone: string;
  source: "own" | "partner" | "demo";
  isVerified: boolean;
  isAvailable: boolean;
  consentToShare: boolean;
  isDummy: boolean;
};




