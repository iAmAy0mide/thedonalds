declare interface IUploadedImage {
    name: string;
    url: string;
  }

declare interface IUProp {
    setAlbumPhotos: Dispatch<SetStateAction<IUploadedImage[]>>,
    albumPhotos: IUploadedImage[]
  }

declare interface albumData {
  albumName: string;
  album: any;
}

declare interface IComment {
  profilePic: string;
  comment: string;
  key: string;
} 

declare interface IAlbumData {
  _id: Key | null | undefined;
  albumId: string;
  albumName: string;
  album: { image: { url: string } }[];
  createdAt: string;
}

declare interface IAlbumsProps {
  albums: IAlbumData[];
}