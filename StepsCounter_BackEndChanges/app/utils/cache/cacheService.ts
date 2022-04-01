import NodeCache from 'node-cache'

class Cache {
    cache: any

    constructor() {
        this.cache = new NodeCache()
    }

    setValueForKey(key: string, value: any) {
        const result = this.cache.set(key, value)
        return result ? true : false
    }


    async getAllKeys() {
        // let allKeys = this.cache.keys();
        return this.cache.keys()
    }

    async getValueForKey(key: string) {
        try {
            const value = this.cache.get(key)
            if (value) {
                return value
            }
            return null
        } catch (error) {
            console.log(error)
        }
    }

    async hasValueForKey(key: string) {
        try {
            const value = this.cache.get(key)
            if (value) {
                return true
            }
            return false
        } catch (error) {
            console.log(error)
        }
    }

    getValuesFromMultipleKey(key: Array<String>) {
        this.cache.mget(key, function (err: any, value: any) {
            if (!err) {
                // console.log(value)
                return value
            }
        })
    }

    deleteValueForKey(keys: string) {
        this.cache.del(keys)
        return 'deleted'
    }

    delStartWith(startStr = '') {
        if (!startStr) {
            return 'deletion failed'
        }

        const keys = this.cache.keys()
        for (const key of keys) {
            if (key.indexOf(startStr) === 0) {
                this.deleteValueForKey(key)
            }
        }
    }

    async flushAndLoadConfig() {
        await this.flush()
    }

    async flush() {
        this.cache.flushAll()
    }
}

const cacheService = new Cache()
export default cacheService
