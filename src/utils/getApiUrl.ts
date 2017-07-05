interface GetApiUrlOptions {
  scheme?: string;
}

export default function getApiUrl(path, options: GetApiUrlOptions = {}) {
  const scheme = options.scheme ? `${options.scheme}:` : document.location.protocol;
  return `${scheme}//${process.env.API_HOST}${path}`;
}
