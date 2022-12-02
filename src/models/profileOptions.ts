/**
 * ProfileOption describe possible values for a working algorithm.
 * For example, slam can run in modes : narrow, wide, ...
 */
export interface ProfileOptions {
  profileName: string;
  options: string[];
}
