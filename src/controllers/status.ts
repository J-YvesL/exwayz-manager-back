import { cmd } from '@/helpers/cmd';
import { ManagerState } from '@/models/managerState';
import { ExwayzManagerCommands } from '@/models/commandsEnum';

export async function availableMaps(): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    cmd(ExwayzManagerCommands.AVAILABLE_MAPS)
      .then((res) => {
        resolve(
          res
            .split('\n')
            .filter((item) => item.length > 0 && item.startsWith('  -'))
            .map((item) => item.slice(4))
        );
      })
      .catch(() => reject());
  });
}

export async function availableProfiles(): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    cmd(ExwayzManagerCommands.GET_PROFILE)
      .then((res) => {
        const profilesList = res.split('profiles:')[1];
        resolve(
          profilesList
            .split('\n')
            .filter((item) => item.length > 0 && item.startsWith('  -'))
            .map((item) => item.slice(4))
        );
      })
      .catch(() => reject());
  });
}

export async function availableStates(): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    cmd(ExwayzManagerCommands.GET_PROFILE)
      .then((res) => {
        const tmp = res.split('states:')[1];
        const statesList = tmp.split('profiles:')[0];
        resolve(
          statesList
            .split('\n')
            .filter((item) => item.length > 0 && item.startsWith('  -'))
            .map((item) => item.slice(4))
        );
      })
      .catch(() => reject());
  });
}

export async function managerState(): Promise<ManagerState> {
  return new Promise<ManagerState>((resolve, reject) => {
    cmd(ExwayzManagerCommands.MANAGER_STATE)
      .then((res) => {
        const stateStr = res.split('"')[1];
        if (stateStr === 'idle') {
          resolve(ManagerState.IDLE);
        } else if (stateStr === 'mapping') {
          resolve(ManagerState.MAPPING);
        } else if (stateStr === 'localizing') {
          resolve(ManagerState.LOCALIZING);
        } else if (stateStr === 'slam') {
          resolve(ManagerState.SLAM);
        } else if (stateStr === 'reloc_ready') {
          resolve(ManagerState.RELOC_READY);
        } else if (stateStr === 'saving_map') {
          resolve(ManagerState.SAVING_MAP);
        } else {
          resolve(ManagerState.UNKNOWN);
        }
      })
      .catch(() => reject());
  });
}
