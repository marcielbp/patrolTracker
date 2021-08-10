import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LocationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Locations {
  readonly id: string;
  readonly lat?: number;
  readonly lon?: number;
  readonly timestamp?: number;
  readonly routeID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Locations, LocationsMetaData>);
  static copyOf(source: Locations, mutator: (draft: MutableModel<Locations, LocationsMetaData>) => MutableModel<Locations, LocationsMetaData> | void): Locations;
}