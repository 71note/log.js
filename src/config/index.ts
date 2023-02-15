/** Generate default configuration information */

export const VERSION = '2.0.1';

//Ignore Collection
export const IGNORE_LIST = [
    `${location.protocol}//pv.sohu.com/cityjson?ie=utf-8`,
    `${location.protocol}//ip-api.com/json/?lang=zh-CN`
];

export function getDefaultInfo() {

    let temp: { logType: string[]; ioFilter: (item: any) => boolean; pattern: string; degree: number; id: string; sendAddress: string; reportingBefore: (params: any) => any } = {
        pattern: 'default',
        logType: ["error", "diy", 'click', 'io'],
        degree: 1,
        id: 'logJs',
        ioFilter: item => true,
        sendAddress: '',
        reportingBefore: params => params
    };

    return temp;
}