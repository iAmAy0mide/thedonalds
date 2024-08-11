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

declare interface IModal {
  isCommentModalOpen: boolean;
  isUploadPhotoModalOpen: boolean;
  isDisplayAlbumPhotosOpen: boolean;
}

declare interface IComments {
  comments: {
    _id: string;
    comment: string;
  }[]
}

declare interface UploadAlbumForm {
  setAlbumPhotos: Dispatch<SetStateAction<IUploadedImage[]>>;
  albumPhotos: IUploadedImage[];
}
