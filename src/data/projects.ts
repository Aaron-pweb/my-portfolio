export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'BETA';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'PJ-STORE-FLASK',
    description: 'Multi-role e-commerce platform built with Flask, featuring Stripe and Tele-birr payment integration. Includes dedicated dashboards for Sellers and Admins, product variant management, and an integrated support system.',
    tags: ['Flask', 'Python', 'Stripe', 'Tele-birr', 'E-commerce'],
    repo: 'https://github.com/Aaron-pweb/PJ-Store-Flask',
    status: 'COMPLETED',
  },
  {
    id: '2',
    title: 'DIGITAL_AUDIO_SIGNAL_FILTERING',
    description: 'Advanced signal processing project focused on noise reduction and filtering techniques for digital audio using Jupyter Notebooks.',
    tags: ['Python', 'Jupyter', 'DSP', 'Signal Processing'],
    repo: 'https://github.com/Aaron-pweb/Digital_Audio_Signal_Filtering_and_Noise_Reduction',
    status: 'COMPLETED',
  },
  {
    id: '3',
    title: 'DATA_SCIENCE_PROJECTS',
    description: 'A collection of data science explorations and analytical models implemented in Jupyter Notebooks.',
    tags: ['Data Science', 'Python', 'Jupyter', 'Analysis'],
    repo: 'https://github.com/Aaron-pweb/Data-science-Projects',
    status: 'COMPLETED',
  }
];
