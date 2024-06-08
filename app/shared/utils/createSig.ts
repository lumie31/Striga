import crypto from 'crypto';

export const calculateSignature = (
  body: string,
  method: string,
  endpoint: string
) => {
  const STRIGA_API_SECRET = process.env.NEXT_PUBLIC_STRIGA_API_SECRET;

  const hmac = crypto.createHmac('sha256', STRIGA_API_SECRET ?? '');
  const time = Date.now().toString();

  hmac.update(time);
  hmac.update(method);
  hmac.update(endpoint ?? '');

  const contentHash = crypto.createHash('md5');

  contentHash.update(body);

  hmac.update(contentHash.digest('hex'));

  const auth = `HMAC ${time}:${hmac.digest('hex')}`;

  return auth;
};
