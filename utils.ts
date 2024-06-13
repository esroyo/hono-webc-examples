import { dirname, fromFileUrl, join } from '@std/path';

export const buildRelativePath = (url: string, path: string): string => {
    return join(dirname(fromFileUrl(url)), path);
};
