import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  index: string;
  children?: ReactNode;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  highlight?: boolean;
  wide?: boolean;
}

export interface ChartData {
  name: string;
  value: number;
}
