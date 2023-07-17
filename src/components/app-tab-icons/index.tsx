import {TabBarIconProps} from '../../types';
import React from 'react';
import {
  DollarSignIcon,
  GraphIcon,
  RepeatIcon,
  SettingsIcon,
} from '../../assets/icons';

export type AppTabIconNames =
  | 'rate-table'
  | 'currency-convert'
  | 'top-currency'
  | 'settings';

export interface AppTabIconsProps extends TabBarIconProps {
  name: AppTabIconNames;
}

export default function AppTabIcons({size, name}: AppTabIconsProps) {
  switch (name) {
    case 'rate-table':
      return <DollarSignIcon width={size} height={size} />;
    case 'currency-convert':
      return <RepeatIcon width={size} height={size} />;
    case 'top-currency':
      return <GraphIcon width={size} height={size} />;
    case 'settings':
      return <SettingsIcon width={size} height={size} />;
  }
}
