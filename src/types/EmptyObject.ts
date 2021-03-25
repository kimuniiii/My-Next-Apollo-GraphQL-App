/**
 * 空オブジェクトのみを許容する型
 * example : const a: EmptyObject = {} // OK
 * example : const b: EmptyObject = {hoge: "aaa"} // NG
 */
export type EmptyObject = { [key: string]: never };
