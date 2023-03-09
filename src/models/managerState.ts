export enum ManagerState {
  IDLE = 'IDLE',
  RECORD = 'RECORD',
  CREATE_MAP = 'CREATE_MAP',
  RELOC_READY = 'RELOC_READY',
  LOCALIZING = 'LOCALIZING',
  SLAM = 'SLAM',
  ERROR = 'ERROR',
  UNKNOWN = 'UNKNOWN'
}

let loadedMap: string | null = null;

export function getLoadedMap(): string | null {
  return loadedMap;
}

export function setLoadedMap(value: string | null): void {
  loadedMap = value;
}
