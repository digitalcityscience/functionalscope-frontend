import type { Layer, Map as MapboxMap } from "mapbox-gl";
import CityPyOStore from "./store/cityPyO";
import type StormWater from "./store/stormwater";
import type Wind from "./store/wind";

export type { MapboxMap };
export type GeoJSON = Record<string, unknown>;

export interface VisibleLayers {
  focusAreas: boolean;
  abm: boolean;
  heat: boolean;
  amenities: boolean;
  noise: boolean;
  stormwater: boolean;
  wind: boolean;
  sunExposure: boolean;
  multiLayerAnalysis: boolean;
  trees: boolean;
}

export interface View {
  center: [number, number];
  zoom: number;
  pitch: number;
  bearing: number;
}

export interface StoreState {
  map: MapboxMap | null;
  activeMenuComponent: string;
  allFeaturesHighlighted: boolean;
  showLegend: boolean;
  currentTime: number;
  view: View;
  accessToken: string;
  cityPyO: CityPyOStore | null;
  mapStyle: string;
  restrictedAccess: boolean;
  focusAreasGeoJson: GeoJSON | null;
  focusAreasShown: boolean; // TODO: use visible layers instead
  openModalsIds: string[];
  modalIndex: number;
  selectedObjectId: string | null;
  selectedMultiFeatures: any[];
  featureCircles: any[];
  visibleLayers: VisibleLayers;
}

export interface ScenarioStoreState {
  showUi: boolean;
  activeAbmSet: unknown;
  animationRunning: boolean;
  abmTimePaths: unknown;
  abmTimeRange: [number, number];
  heatMap: boolean;
  rerenderSwGraph: boolean;
  stormWater: boolean;
  loop: boolean;
  abmSimpleTimes: Record<any, any>;
  currentTimeStamp: number;
  selectGraph: ScenarioWithTimeSheets;
  resultLoading: boolean;
}

export type StormWaterRoofType = "extensive" | "intensive";

export type StormWaterFlowPath = "blockToPark" | "blockToStreet";

export interface WindScenarioConfiguration {
  wind_speed: number;
  wind_direction: number;
}

export interface SavedWindScenarioConfiguration extends WindScenarioConfiguration{
  label: string;
}

export interface WindResult {
  geojson: GeoJSON;
  complete: boolean;
  tasksCompleted: number
}
export interface StormWaterScenarioConfiguration {
  returnPeriod: number;
  flowPath: StormWaterFlowPath;
  roofs: StormWaterRoofType;
}

export interface StormWaterResult {
  geojson: GeoJSON;
  rainData: number[];
  complete: boolean;
}

export type ScenarioWithTimeSheets = "abm" | "sw";

export interface StoreStateWithModules extends StoreState {
  scenario: ScenarioStoreState;
  stormwater: StormWater;
  wind: Wind;
}

export interface Legend {
  headline: string;
  icon: string;
  labelLowValues: string;
  labelHighValues: string;
  categories: Categories[];
}

export interface Categories {
  label: string;
  detail: string;
  color: string;
}

export interface MenuLink {
  title: string;
  icon: string;
  hidden?: boolean;
  default?: boolean;
}

export interface CityPyOUser {
  authenticated: boolean;
  restricted?: boolean;
  context?: Record<string, unknown>;
}

export interface CityPyO {
  url: string;
  userid: string;
}

export interface CalculationTask {
  taskId: string;
}

export interface SourceAndLayerConfig {
  "source": MapSource,
  "layerConfig": Layer
}

export interface MapSource {
  id: string;
  options: {
    type: "geojson" | string;
    data: Record<string | number, any>;
  };
}
