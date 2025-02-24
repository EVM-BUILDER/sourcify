import { WStorageIdentifiers, RWStorageIdentifiers } from "../server/services/storageServices/identifiers";

export const serverUrl = "http://localhost:5555";
export const server = {
  port: 5555,
  maxFileSize: 30 * 1024 * 1024, // 30 MB
};
export const storage = {
  // read option will be the "source of truth" where the contracts read from for the API requests.
  read: RWStorageIdentifiers.SourcifyDatabase,
  // User request will NOT fail if saving to these fail, but only log a warning
  writeOrWarn: [
    WStorageIdentifiers.AllianceDatabase,
    RWStorageIdentifiers.RepositoryV1,
  ],
  // The user request will fail if saving to these fail
  writeOrErr: [
    WStorageIdentifiers.RepositoryV2,
    RWStorageIdentifiers.SourcifyDatabase,
  ],
};
export const repositoryV1 = {
  path: "/tmp/sourcify/repository",
};
export const repositoryV2 = {
  path: "/tmp/sourcify/repositoryV2",
};
export const solcRepo = "/tmp/solc-bin/linux-amd64";
export const solJsonRepo = "/tmp/solc-bin/soljson";
export const vyperRepo = "/tmp/vyper-bin";
export const session = {
  secret: process.env.SESSION_SECRET || "CHANGE_ME",
  maxAge: 12 * 60 * 60 * 1000, // 12 hrs in millis
  secure: false, // Set Secure in the Set-Cookie header i.e. require https
  storeType: "memory", // Where to save the session info. "memory" is only good for testing and local development. Don't use it in production!
};
export const initCompilers = false;
export const corsAllowedOrigins = [
  /^https?:\/\/(?:.+\.)?sourcify.dev$/, // sourcify.dev and subdomains
  /^https?:\/\/(?:.+\.)?sourcify.eth$/, // sourcify.eth and subdomains
  /^https?:\/\/(?:.+\.)?sourcify.eth.link$/, // sourcify.eth.link and subdomains
  /^https?:\/\/(?:.+\.)?ipfs.dweb.link$/, // dweb links used by Brave browser etc.
  process.env.NODE_ENV !== "production" && /^https?:\/\/localhost(?::\d+)?$/, // localhost on any port
  process.env.NODE_ENV !== "production" &&
  /^https?:\/\/192\.168(?:\.\d{1,3}){2}(?::\d+)?$/, // local IPs with 192.168.x.x
  process.env.NODE_ENV !== "production" &&
  /^https?:\/\/10(?:\.\d{1,3}){3}(?::\d+)?$/, // local IPs with 10.x.x.x
];
export const verifyDeprecated = false;
export const rateLimit = {
  enabled: false,
  // Check done with "startsWith"
  whitelist: [
    "10.", // internal IP range
    "::ffff:10.",
    "127.0.0.1",
    "::ffff:127.0.0.1",
    "::1",
  ],
};
