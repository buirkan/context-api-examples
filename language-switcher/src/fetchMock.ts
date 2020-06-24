import { resolve } from "dns";

const data: Object = {
    'en-US': [],
    'es-ES': [],
    'ru-RU': []
};

// default lang en-US
export function fetchMock(lang: String = 'en-US') {
    return new Promise(resolve => resolve(data));
}