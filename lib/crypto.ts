import crypto from "node:crypto";
import { TOKEN_ENCRYPTION_KEY } from "./supabase/config";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12; // 96 bits recommended for GCM
const AUTH_TAG_LENGTH = 16; // 128 bits auth tag

/**
 * Derives a consistent 32-byte key from the configured encryption key string.
 */
function getDerivedKey(): Buffer {
  if (!TOKEN_ENCRYPTION_KEY) {
    throw new Error("TOKEN_ENCRYPTION_KEY is not configured.");
  }
  // If exactly 64 hex characters, parse as hex buffer
  if (/^[0-9a-fA-F]{64}$/.test(TOKEN_ENCRYPTION_KEY)) {
    return Buffer.from(TOKEN_ENCRYPTION_KEY, "hex");
  }
  // Otherwise derive a SHA-256 hash of the string to always get 32 bytes
  return crypto.createHash("sha256").update(TOKEN_ENCRYPTION_KEY).digest();
}

/**
 * Encrypts a plaintext string using AES-256-GCM.
 * Returns a base64 string formatted as: `iv:authTag:ciphertext`
 */
export function encryptToken(plaintext: string): string {
  if (!plaintext) return "";
  const key = getDerivedKey();
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv, {
    authTagLength: AUTH_TAG_LENGTH,
  });

  let encrypted = cipher.update(plaintext, "utf8", "base64");
  encrypted += cipher.final("base64");

  const authTag = cipher.getAuthTag();

  return `${iv.toString("base64")}:${authTag.toString("base64")}:${encrypted}`;
}

/**
 * Decrypts a base64 string formatted as `iv:authTag:ciphertext` using AES-256-GCM.
 */
export function decryptToken(encryptedCombined: string): string {
  if (!encryptedCombined) return "";
  const parts = encryptedCombined.split(":");
  if (parts.length !== 3) {
    throw new Error("Invalid encrypted token format.");
  }

  const [ivB64, authTagB64, ciphertextB64] = parts;
  const key = getDerivedKey();
  const iv = Buffer.from(ivB64, "base64");
  const authTag = Buffer.from(authTagB64, "base64");

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv, {
    authTagLength: AUTH_TAG_LENGTH,
  });
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(ciphertextB64, "base64", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}
