/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ESM-safe __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Ensure Next.js doesn't try to infer the workspace root (use project root)
	outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
