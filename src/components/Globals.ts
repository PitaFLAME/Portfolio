


const sizeHMap: { [key: number]: string } = {
    1: 'row-span-1',
    2: 'row-span-1',
    3: 'row-span-2',
    4: 'row-span-2',
    5: 'row-span-4',
    6: 'row-span-4',
    7: 'row-span-6',
    8: 'row-span-4',
    9: 'row-span-2',
    10: 'row-span-4',
    11: 'row-span-2',
    12: 'row-span-1',
    13: 'row-span-4',

};

const sizeWMap: { [key: number]: string } = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-1',
    4: 'col-span-2',
    5: 'col-span-4',
    6: 'col-span-6',
    7: 'col-span-4',
    8: 'col-span-8',
    9: 'col-span-4',
    10: 'col-span-2',
    11: 'col-span-3',
    12: 'col-span-3',
    13: 'col-span-3',

};

/* 1=1x1 2=1x2 3=2x1 4=2x2 5=4x4 6=6x4 7=4x6
8=8x4 9=4x2 10=2x4 11=3x2 12:3x1 13:3x4*/

const accents = [
    ['-white', '-slate-100', '-slate-200', '-slate-300', '-slate-400', '-slate-500', '-slate-600', '-slate-700', '-slate-800', '-slate-900', '-slate-950'],
    ['-white', '-zinc-100', '-zinc-200', '-zinc-300', '-zinc-400', '-zinc-500', '-zinc-600', '-zinc-700', '-zinc-800', '-zinc-900', '-zinc-950'],
    ['-white', '-teal-100', '-teal-200', '-teal-300', '-teal-400', '-teal-500', '-teal-600', '-teal-700', '-teal-800', '-teal-900', '-teal-950'],
    ['-white', '-blue-100', '-blue-200', '-blue-300', '-blue-400', '-blue-500', '-blue-600', '-blue-700', '-blue-800', '-blue-900', '-blue-950'],
]
// old: 100, 200, 700, 800, 900, 950

export const getAccent = (accentID: number, prefix: string) => {
    return prefix + accents[getColorProfile()][accentID]
}

export const getSize = (sizeType: number) => {
    return [sizeWMap[sizeType], sizeHMap[sizeType]]
}
const getColorProfile = () => {
    return 0
}