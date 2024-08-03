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