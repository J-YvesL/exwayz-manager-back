import { cmd } from '@/helpers/cmd';
import { ExwayzManagerCommands } from '@/models/commandsEnum';

export function startSlam(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.START_SLAM)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function stopSlam(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.STOP_SLAM)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function startMap(mapName: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.START_MAP.replace('{mapName}', mapName))
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function stopMap(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.STOP_MAP)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function loadMap(mapName: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.LOAD_MAP.replace('{mapName}', mapName))
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function deleteMap(mapName: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.DELETE_MAP.replace('{mapName}', mapName))
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function stopReloc(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.STOP_RELOC)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function startReloc(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.START_RELOC)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function reinitReloc(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.REINIT_RELOC)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function initializeReloc(x: string, y: string, z: string, angle: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const str = ExwayzManagerCommands.INIT_RELOC.replace('{reloc_x}', x)
      .replace('{reloc_y}', y)
      .replace('{reloc_z}', z)
      .replace('{angle}', angle);
    cmd(str)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function setProfile(algo: string, value: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const str = ExwayzManagerCommands.SET_PROFILE.replace('{algo}', algo)
      .replace('{value}', value);
    cmd(str)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}

export function stopAll(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.STOP_ALL)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}
