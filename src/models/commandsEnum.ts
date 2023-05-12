export enum ExwayzManagerCommands {
  // STATUS
  AVAILABLE_MAPS = 'rosservice call /exwayz_manager/map_list',
  MANAGER_STATE = 'rosservice call /exwayz_manager/get_state',
  GET_PROFILE_ALL = 'rosservice call /exwayz_manager/get_available_profiles',
  GET_PROFILE_CURRENT = 'rosservice call /exwayz_manager/get_current_profiles',

  // COMMANDS
  START_SLAM = 'rosservice call /exwayz_manager/slam_start "vis: {vis}"',
  STOP_SLAM = 'rosservice call /exwayz_manager/slam_stop',

  START_MAP = "rosservice call /exwayz_manager/map_start '{mapName}' {vis}",
  STOP_MAP = 'rosservice call /exwayz_manager/map_stop',
  DELETE_MAP = 'rosservice call /exwayz_manager/map_delete "map_name: \'{mapName}\'"',

  LOAD_MAP = 'rosservice call /exwayz_manager/reloc_load "map_name: \'{mapName}\'"',
  STOP_RELOC = 'rosservice call /exwayz_manager/reloc_stop',
  REINIT_RELOC = 'rosservice call /exwayz_manager/reloc_reinit',
  START_RELOC = 'rosservice call /exwayz_manager/reloc_start "vis: {vis}"',
  // INIT_RELOC = 'rosservice call /exwayz_manager/set_initial_pose "initial_pose: \n position: \n x: {reloc_x} \n  y: {reloc_y} \n  z: {reloc_z} \n orientation: \n  x: 0.0 \n  y: 0.0 \n  z: {reloc_qz}  \n w: {reloc_qw}\"',
  INIT_RELOC = 'rosservice call /exwayz_manager/set_initial_pose "initial_pose:\n  position:\n    x: {reloc_x}\n    y: {reloc_y}\n    z: {reloc_z}\n  orientation:\n    x: 0.0\n    y: 0.0\n    z: {reloc_qz}\n    w: {reloc_qw}"',

  STOP_ALL = 'rosservice call /exwayz_manager/stop_all',
  SET_PROFILE = "rosservice call /exwayz_manager/set_profile '{algo}' '{value}'",

  // MISCELANEOUS
  SET_CROP = 'rosservice call /exwayz_manager/set_crop_box "center : [{center_x}, {center_y}, {center_z}]] \n size : [{size_x}, {size_y}, {size_z}] \n out: {out}"'
}


