import { createContext, useContext } from "react";

interface IAlbumContextProps {
    currentAlbumId: string
}

const AlbumContext = createContext<IAlbumContextProps | undefined>(undefined);

export const useAlbumContext = () => {
    const context = useContext(AlbumContext);

    if (!context) {
        throw Error("useAlbumContext must be used within an AlbumProvider")
    }

    return context;
}

export const AlbumContextProvider = ({ children, currentAlbumId}: { children: React.ReactNode, currentAlbumId: string }) => {
    
    return (
        <AlbumContext.Provider value={{ currentAlbumId }}>
            {children}
        </AlbumContext.Provider>
    )
}