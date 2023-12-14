const conf= {
  appwriteProjectId:String(import.meta.env.VITE_PROJECT_ID),
  appwriteDatabaseId:String(import.meta.env.VITE_DATABASE_ID),
  appwriteCollectionId:String(import.meta.env.VITE_COLLECTION_ID),
  appwriteDocumentId:String(import.meta.env.VITE_DOCUMENT_IDALLSONGS),
  appwriteBucketIdSongFileId:String(import.meta.env.VITE_BUCKET_IDSONGFILE),
  appwriteBucketIdSongImageId:String(import.meta.env.VITE_BUCKET_IDSONGIMAGE),
}
export default conf
