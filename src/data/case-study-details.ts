export interface ImperativeScore {
  grade: string;
  reason: string;
}

export interface CaseStudyDetail {
  overview: string;
  mechanic: string;
  signal: string;
  reward: string;
  coding: string;
  durability: string;
  scalability: string;
  ladder: string;
  synthesis: string;
  cautionary: string;
  imperativeScores: Record<string, ImperativeScore>;
}

// Placeholder — will be populated with full 7-lens content from case study MDs
export const caseStudyDetails: Record<string, CaseStudyDetail> = {};
