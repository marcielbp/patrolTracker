// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Usuario, Rondista, RondistaRonda, Ronda, Locations } = initSchema(schema);

export {
  Usuario,
  Rondista,
  RondistaRonda,
  Ronda,
  Locations
};