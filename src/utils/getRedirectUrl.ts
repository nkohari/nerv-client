import * as qs from 'querystring';

export default function getRedirectUrl(): string {
  const { search } = document.location;
  if (search && search.length > 0) {
    const params = qs.parse(search.substr(1));
    if (params.r) return params.r;
  }
  return '/';
}
