export function base64Encode(str: string): string {
    try {
        return btoa(str);
    } catch {
        return str;
    }
}

export function base64Decode(str: string): string {
    try {
        return atob(str);
    } catch {
        return str;
    }
}
