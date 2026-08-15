// ============ Product ============

export type ProductId =
  | 'can-1'
  | 'can-2'
  | 'can-3'
  | 'can-5'
  | 'can-6'
  | 'can-8'
  | 'can-38'
  | 'lid-72-8'
  | 'lid-83-4'
  | 'lid-99'
  | 'trench-candle-cans'
  | 'brush-ferrules'
  | 'metal-trays';

export interface Product {
  id: ProductId;
  imageSrc: string;
}

export type ProductsList = Product[];

// ============ Feature ============
export type FeatureId =
  | 'team'
  | 'price'
  | 'volumes'
  | 'delivery'
  | 'quality'
  | 'payment-deferral';

export interface Feature {
  id: FeatureId;
  imageSrc: string;
}

export type FeaturesList = Feature[];

// ============ ThemeMode ============
export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}
