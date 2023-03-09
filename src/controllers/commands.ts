import { cmd } from '@/helpers/cmd';
import Logger from '@/loaders/logger';
import { ExwayzManagerCommands } from '@/models/commandsEnum';

export function startSlam(vis: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.START_SLAM.replace('{vis}', vis))
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

export function startMap(mapName: string, vis: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const str = ExwayzManagerCommands.START_MAP.replace('{mapName}', mapName)
      .replace('{vis}', vis);
    cmd(str)
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

export function startReloc(vis: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    cmd(ExwayzManagerCommands.START_RELOC.replace('{vis}', vis))
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

export function setCropBox(center_x: string, center_y: string, center_z: string, size_x: string, size_y: string, size_z: string, out: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const str = ExwayzManagerCommands.SET_CROP.replace('{crop_center_x}', center_x)
      .replace('{center_y}', center_y)
      .replace('{center_z}', center_z)
      .replace('{size_x}', size_x)
      .replace('{size_y}', size_y)
      .replace('{size_z}', size_z)
      .replace('{out}', out);
    cmd(str)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
}
