import { create } from "zustand";

type CoverImageParams = {
    documentId: string;
};

type CoverImageStore = {
    url?: string;
    params?: CoverImageParams;
    isOpen: boolean;
    onOpen: (params: CoverImageParams) => void;
    onClose: () => void;
    onReplace: (url: string, params: CoverImageParams) => void;
};

export const useCoverImage = create<CoverImageStore>((set) => ({
    url: undefined,
    isOpen: false,
    params: undefined,
    onOpen: (params) => set({ isOpen: true, params, url: undefined }),
    onClose: () => set({ isOpen: false, url: undefined, params: undefined }),
    onReplace: (url, params) => set({ isOpen: true, url, params }),
}));
