export interface Order {
    summary: string
    diagnostic: Diagnostic[]
    selfCareTips: string
    OTC: Otc[]
    miraCareOptions: MiraCareOption[]
    miraOSsummary: MiraOsSummary
    visitIntake: VisitIntake[]
  }
  
  export interface Diagnostic {
    name: string
    code: string
  }
  
  export interface Otc {
    name: string
    type: string
    dose: string
    frequency: string
  }
  
  export interface MiraCareOption {
    careType: string[]
    active: string[]
    description: string
  }
  
  export interface MiraOsSummary {
    triageLevel: string[]
    chiefComplaint: string
    dx: Dx[]
    reasonsForDx: string
    conditionCategory: string
    rxRecommendation: RxRecommendation[]
    rxExplanation: string
  }
  
  export interface Dx {
    diagnosis: string
    probability: string
    ICD10CMCode: string
  }
  
  export interface RxRecommendation {
    name: string
    type: string
    dose: string
    instruction: string
  }
  
  export interface VisitIntake {
    request?: string
    title?: string
    value?: string
  }
  
  export interface TreatmentPlan {
    patientMessage: string;
    plan: string;
    visitSummary: string;
    providerName: string;
  }
  
  