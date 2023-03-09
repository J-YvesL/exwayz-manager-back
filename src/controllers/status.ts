import { cmd } from '@/helpers/cmd';
import { ManagerState } from '@/models/managerState';
import { ExwayzManagerCommands } from '@/models/commandsEnum';
import { ProfileOptions } from '@/models/profileOptions';
import { ProfileCurrent } from '@/models/profileCurrent';

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

export async function currentProfiles(): Promise<ProfileCurrent[]> {
  return new Promise<ProfileCurrent[]>((resolve, reject) => {

    cmd(ExwayzManagerCommands.GET_PROFILE_CURRENT)
      .then((res) => {
        const profiles_list = res.split('profiles:')[1].split('\n');
        var profiles = [];
        for (const profile of profiles_list) {
          if (profile.length > 0 && profile.startsWith('  -')) {
            const s = profile.slice(4).split(':');
            const p: ProfileCurrent = { 'algo':s[0], 'value':s[1] };
            profiles.push(p);
          }
        }
        resolve(profiles)
      })
      .catch(() => reject());
  });
}

export async function allProfiles(): Promise<ProfileOptions[]> {
  return new Promise<ProfileOptions[]>((resolve, reject) => {
    cmd(ExwayzManagerCommands.GET_PROFILE_ALL)
      .then((res) => {
        const profiles_list = res.split('profiles:')[1].split('\n');
        let profiles = [];
        for (const profile of profiles_list) {
          if (profile.length > 0 && profile.startsWith('  -')) {
            const s = profile.slice(4).split(':');
            var found = false;
            for (const p of profiles) {
              if (s[0] == p.algo) {
                p.values.push(s[1]);
                found = true;
                break;
              }
            }
            if(! found){
              const new_p: ProfileOptions = { 'algo':s[0], 'values':[s[1]] };
              profiles.push(new_p)
            }
          }
        }
        resolve(profiles)
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
        } else if (stateStr === 'record') {
          resolve(ManagerState.RECORD);
        } else if (stateStr === 'localizing') {
          resolve(ManagerState.LOCALIZING);
        } else if (stateStr === 'slam') {
          resolve(ManagerState.SLAM);
        } else if (stateStr === 'reloc_ready') {
          resolve(ManagerState.RELOC_READY);
        } else if (stateStr === 'map_create') {
          resolve(ManagerState.CREATE_MAP);
        } else if (stateStr === 'error') {
          resolve(ManagerState.ERROR);
        } else {
          resolve(ManagerState.UNKNOWN);
        }
      })
      .catch(() => reject());
  });
}
