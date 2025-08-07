// resman-ui-recruit/src/recruit/sidebar.config.ts
export interface SidebarItem {
  label: string;
  path: string;
}

export interface SidebarSection {
  section: string;
  items: SidebarItem[];
}

export type SidebarConfig = SidebarSection[];

export const RecruitSidebarItems: SidebarConfig = [
  {
    section: 'Recruitment',
    items: [
      { label: 'Dashboard', path: '' },
      { label: 'Job Postings', path: 'jobs' },
      { label: 'Candidates', path: 'candidates' },
    ],
  },
  {
    section: 'Interviews',
    items: [
      { label: 'Schedule Interviews', path: 'interviews' },
      { label: 'Interview Feedback', path: 'interview-feedback' },
    ],
  },
  {
    section: 'Offers',
    items: [
      { label: 'Manage Offers', path: 'offers' },
      { label: 'Offer Letters', path: 'offer-letters' },
    ],
  },
];

export default RecruitSidebarItems;
