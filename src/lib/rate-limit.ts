import { LRUCache } from 'lru-cache'

type Options = {
  uniqueTokenPerInterval?: number
  interval?: number
}

export function rateLimit(options?: Options) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  })

  return {
    check: async (token: string, limit: number) => {
      const tokenCount = (tokenCache.get(token) as number[]) || [0]
      if (tokenCount[0] === 0) {
        tokenCache.set(token, [1])
      } else {
        tokenCount[0] += 1
        tokenCache.set(token, tokenCount)
      }

      const currentUsage = tokenCount[0]
      const isRateLimited = currentUsage >= limit

      return {
        success: !isRateLimited,
        limit,
        remaining: isRateLimited ? 0 : limit - currentUsage,
        reset: Date.now() + (options?.interval || 60000),
      }
    },
  }
}