import { WStorageIdentifiers, RWStorageIdentifiers } from "../server/services/storageServices/identifiers";

export const repositoryV1 = {
  path: "/tmp/repositoryV1-test/",
};
export const repositoryV2 = {
  path: "/tmp/repositoryV2-test/",
};
export const session = {
  storeType: "database",
};
export const storage = {
  read: RWStorageIdentifiers.SourcifyDatabase,
  writeOrWarn: [
    RWStorageIdentifiers.RepositoryV1,
    WStorageIdentifiers.S3Repository,
  ],
  writeOrErr: [
    WStorageIdentifiers.RepositoryV2,
    RWStorageIdentifiers.SourcifyDatabase,
  ],
};
