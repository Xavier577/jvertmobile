export type TabBarIconProps = Partial<{
  focused: boolean;
  color: string;
  size: number;
}>;

export type DynamicObject<T = any> = {[name: string]: T};
