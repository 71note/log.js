import {ClickInfo, ConfigInfo, DiyInfo, ErrorInfo, IoInfo, PerformanceInfo, TerminalInfo} from "../interface";
import {getDefaultInfo} from "../config";

/** Information storage module */

const infoStorage_push = (type: string, info: any) => {
    if (!Array.isArray(storage[type])) {
        storage[type] = Object.assign(storage[type], info);
    } else {
        storage[type].push(info);
    }
}

const clear_all_log = () => {
    storage.error_list = [];
    storage.diy_list = [];
    storage.click_list = [];
    storage.io_list = [];
}

let storage: { [key: string]: any; diy_list: DiyInfo[]; io_list: IoInfo[]; error_list: ErrorInfo[]; click_list: ClickInfo[]; performance_info: PerformanceInfo; save: (type: string, info: any) => void; clear_all_log: () => void; terminal_info: TerminalInfo; config_info: ConfigInfo } = {
    error_list: [],
    diy_list: [],
    click_list: [],
    io_list: [],

    terminal_info: {},

    performance_info: {},
    config_info: getDefaultInfo(),
    save: infoStorage_push,
    clear_all_log: clear_all_log
};

export default storage;