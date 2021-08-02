import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UsuarioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RondistaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RondistaRondaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RondaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Usuario {
  readonly id: string;
  readonly username?: string;
  readonly profile?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Usuario, UsuarioMetaData>);
  static copyOf(source: Usuario, mutator: (draft: MutableModel<Usuario, UsuarioMetaData>) => MutableModel<Usuario, UsuarioMetaData> | void): Usuario;
}

export declare class Rondista {
  readonly id: string;
  readonly RondistaRondas?: (RondistaRonda | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Rondista, RondistaMetaData>);
  static copyOf(source: Rondista, mutator: (draft: MutableModel<Rondista, RondistaMetaData>) => MutableModel<Rondista, RondistaMetaData> | void): Rondista;
}

export declare class RondistaRonda {
  readonly id: string;
  readonly rondista: Rondista;
  readonly ronda: Ronda;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<RondistaRonda, RondistaRondaMetaData>);
  static copyOf(source: RondistaRonda, mutator: (draft: MutableModel<RondistaRonda, RondistaRondaMetaData>) => MutableModel<RondistaRonda, RondistaRondaMetaData> | void): RondistaRonda;
}

export declare class Ronda {
  readonly id: string;
  readonly rondista?: string;
  readonly check?: string;
  readonly inicio?: number;
  readonly fim?: number;
  readonly status?: string;
  readonly rondistas?: (RondistaRonda | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Ronda, RondaMetaData>);
  static copyOf(source: Ronda, mutator: (draft: MutableModel<Ronda, RondaMetaData>) => MutableModel<Ronda, RondaMetaData> | void): Ronda;
}

export declare class Locations {
  readonly id: string;
  readonly geopos?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Locations, LocationsMetaData>);
  static copyOf(source: Locations, mutator: (draft: MutableModel<Locations, LocationsMetaData>) => MutableModel<Locations, LocationsMetaData> | void): Locations;
}