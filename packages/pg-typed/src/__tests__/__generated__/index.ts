/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: C2rE0s2EwRkSwsHM1+9YSX/xEHJmwlYAdEVlGChrsb6VC364AhizedrfKVqgJ7l1D6mbevDONU6z/MjhPkY9bg==
 */

// eslint:disable
// tslint:disable

import Photo, {Photos_InsertParameters} from './photos';
import User, {Users_InsertParameters} from './users';

interface DatabaseSchema {
  photos: {record: Photo; insert: Photos_InsertParameters};
  users: {record: User; insert: Users_InsertParameters};
}
export default DatabaseSchema;
