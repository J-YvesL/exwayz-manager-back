export enum ExwayzManagerCommands {
  // STATUS
  AVAILABLE_MAPS = 'rosservice call /exwayz_manager/map_list',
  MANAGER_STATE = 'rosservice call /exwayz_manager/get_state',

  // COMMANDS
  START_SLAM = 'rosservice call /exwayz_manager/slam_start "viz: false"',
  STOP_SLAM = 'rosservice call /exwayz_manager/slam_stop',
  START_MAP = 'rosservice call /exwayz_manager/map_start "map_name: \'{mapName}\'"',
  STOP_MAP = 'rosservice call /exwayz_manager/map_stop',
  LOAD_MAP = 'rosservice call /exwayz_manager/map_load "map_name: \'{mapName}\'"',
  DELETE_MAP = 'rosservice call /exwayz_manager/map_delete "map_name: \'{mapName}\'"',
  STOP_RELOC = 'rosservice call /exwayz_manager/reloc_stop "data: false"',
  START_RELOC = 'rosservice call /exwayz_manager/reloc_start',
  INIT_RELOC = 'rosservice call /exwayz_manager/set_initial_pose "initial_pose:position: \n x: {reloc_x} \n  y: {reloc_y} \n  z: {reloc_z} \n  orientation: \n  x: 0.0 \n  y: 0.0 \n  z: {angle}  \n w: 0.0”',
  REINIT_RELOC = 'rosservice call /exwayz_manager/reloc_reinit',
  STOP_ALL = 'rosservice call /exwayz_manager/stop_all'
}
  