export interface SkillCategory {
  name: string;
  percentage: string;
  tags: SkillCategoryTags[];
}

export interface SkillCategoryTags {
  name: string;
  id: string;
}
