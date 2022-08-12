import { atom } from 'recoil';

export const counterHistory = atom({
    key: 'counterHistory',
    default: []
});
