export enum ManagerState {
  IDLE = 'IDLE',
  ERROR = 'ERROR',
  MAPPING = 'MAPPING',
  SAVING_MAP = 'SAVING_MAP',
  RELOC_READY = 'RELOC_READY',
  LOCALIZING = 'LOCALIZING',
  SLAM = 'SLAM',
  UNKNOWN = 'UNKNOWN'
}

let loadedMap: string | null = null;

export function getLoadedMap(): string | null {
  return loadedMap;
}

export function setLoadedMap(value: string | null): void {
  loadedMap = value;
}
