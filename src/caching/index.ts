import { ICacheClient, ICacheOptions } from '../interfaces/ICache.interface';
import RedisClient from './adapters/redis';

export default function Cache(cachingOptions: ICacheOptions): ICacheClient {
  return new RedisClient(cachingOptions);
}
