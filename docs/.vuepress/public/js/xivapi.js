
class XIVAPI {
    /*{
        private_key	string	undefined	optional
        language		string	'en'			optional
        snake_case	bool		false			optional
        staging			bool		false			optional
        verbose			bool		false			optional
    }
    */
    constructor(options = {}, legacyOptions = {}) {
        //handle attempted use of old API key
        if (typeof (options) === 'string') {
            console.error('[xivapi-js] BREAKING CHANGE:\n\
The previous API keys for XIVAPI have been phased out, and are no longer mandatory. \
This means you\'ll have to define your key during initialization slightly differently. \
See how in https://github.com/xivapi/xivapi-js/releases/tag/v0.1.3.\n\
**This instance of xivapi-js will run WITHOUT an API key**')
            options = legacyOptions
        }

        if (options.cn) {
            this.endpoint = `https://cafemaker.wakingsands.com`
        }
        else {
            this.endpoint = `https://${options.staging ? 'staging.' : ''}xivapi.com`
        }
        if (options.language && !this.resources.languages.includes(options.language))
            throw Error(`Invalid language given, must be one of: ${this.resources.languages}`)

        this.globalParams = {}

        for (let x of ['private_key', 'language']) {
            if (typeof options[x] !== 'undefined')
                this.globalParams[x] = options[x]
        }
        if (options.snake_case)
            this.globalParams.snake_case = 1

        this.verbose = options.verbose

        this.resources = { languages: ['en', 'ja', 'de', 'fr', 'cn', 'kr'] }
        this.utils = utils
        this.search = Search.bind(this)
        this.data = new Data(this)
        this.character = new Character(this)
        this.freecompany = new FreeCompany(this)
        this.linkshell = new Linkshell(this)
        this.pvpteam = new PvPTeam(this)
    }

}
async function Search(input, params = {}) {
    let { req, reqJSON, makeCSV, throwError } = utils
    req = req.bind(this)
    reqJSON = reqJSON.bind(this)
    if (typeof (input) === 'undefined')
        throw throwError('search()', 'any input')

    let path = params.lore ? '/lore' : '/search'

    switch (typeof (input)) {
        // GET method
        case 'string':
            params.indexes = makeCSV(params.indexes)
            return req(path, Object.assign(params, { 'string': input }))

        // ElasticSearch JSON method
        case 'object':
            input.indexes = makeCSV(params.indexes)
            return reqJSON(path, input)

        default:
            throw new Error(`Unexpected input type for search: '${typeof (input)}'`)
    }
}
const utils = {
    //standard request function
    req(path, params = {}) {
        let convs = ['snake_case', 'extended']
        for (const c of convs) {
            if (typeof params[c] !== 'undefined')
                params[c] = params[c] ? 1 : 0
        }

        params = Object.assign({}, this.globalParams, params)

        if (this.verbose)
            console.log(`Requesting ${path} with params: `, params)

        // return request({
        //     uri: this.endpoint + path,
        //     qs: params,
        //     json: true
        // })

        const urlfy = obj => Object
            .keys(obj)
            .filter(k => obj[k] ? true : false)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
            .join('&');
        const paramsstr = urlfy(params)
        const uristr = `${this.endpoint + path}?${paramsstr} `
        console.log(uristr)

        return fetch(uristr, { method: 'GET', }).then(r => r.json())
    },

    //JSON request function
    reqJSON(path, body) {
        if (this.verbose)
            console.log(`Requesting ${path} with body: `, body)

        // return request({
        //     method: 'POST',
        //     uri: this.endpoint + path,
        //     body: body,
        //     json: true
        // })

        return fetch(this.endpoint + path, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(r => r.json())
    },

    //handle both comma-separated strings, and string arrays, for CSV params
    makeCSV(x) {
        if (typeof (x) === 'undefined')
            return

        if (Array.isArray(x))
            return x.join(',')
        if (typeof (x) === 'string')
            return x
    },

    throwError(method, param) {
        return Error(`xivapi-js: Can't use ${method} without providing ${param}.`)
    }
}
class Lib {
    constructor(parent) {
        this.parent = parent

        this.req = utils.req.bind(parent)
        this.reqJSON = utils.reqJSON.bind(parent)
        this.makeCSV = utils.makeCSV
        this.throwError = utils.throwError
    }
}
class Data extends Lib {
    constructor(parent) {
        super(parent)
    }
    async content() {
        return this.req('/content')
    }
    /*
    {
        limit
        ids
    }
    */
    async list(name, params = {}) {
        if (typeof name === 'undefined')
            throw this.throwError('data.list()', 'a name')

        params.ids = this.parent.utils.makeCSV(params.ids)

        return this.req(`/${name}`, params)
    }
    async get(name, id) {
        const missing_params = []
        if (typeof name === 'undefined')
            missing_params.push('a name')
        if (typeof id === 'undefined')
            missing_params.push('an ID')
        if (missing_params.length > 0)
            throw this.throwError('data.get()', missing_params.join(','))

        return this.req(`/${name}/${id}`)
    }

    servers() {
        return this.req('/servers')
    }

    datacenters() {
        return this.req('/servers/dc')
    }
}
class Character extends Lib {
    constructor(parent) {
        super(parent)
    }

    /*
    {
        server
        page
    }
    */
    async search(name, params = {}) {
        if (!name)
            throw this.throwError('character.search()', 'a name')
        return this.req('/character/search', Object.assign(params, { name }))
    }

    /*
    {
        extended
        data
    }
    */
    async get(id, params = {}) {
        if (!id)
            throw this.throwError('character.get()', 'an ID')

        return this.req(`/character/${id}`, params)
    }
}
class FreeCompany extends Lib {
    constructor(parent) {
        super(parent)
    }

    /*
    {
        server	string	optional
        page		int			optional
    }
    */
    async search(name, params = {}) {
        if (typeof (name) === 'undefined')
            throw this.throwError('freecompany.search()', 'a name')
        return this.req('/freecompany/search', Object.assign(params, { name }))
    }

    /*
    {
        extended
        data
    }
    */
    async get(id, params = {}) {
        if (typeof (id) === 'undefined')
            throw this.throwError('freecompany.get()', 'an ID')

        params.data = this.makeCSV(params.data)

        return this.req(`/freecompany/${id}`, params)
    }
}
class Linkshell extends Lib {
    constructor(parent) {
        super(parent)
    }

    /*
    {
        server	string	optional
        page		int			optional
    }
    */
    async search(name, params = {}) {
        if (typeof (name) === 'undefined')
            throw this.throwError('linkshell.search()', 'a name')
        return this.req('/linkshell/search', Object.assign(params, { name }))
    }

    async get(id) {
        if (typeof (id) === 'undefined')
            throw this.throwError('linkshell.get()', 'an ID')
        return this.req(`/linkshell/${id}`)
    }
}
class PvPTeam extends Lib {
    constructor(parent) {
        super(parent)
    }

    /*
    {
        server	string	optional
        page		int			optional
    }
    */
    async search(name, params = {}) {
        if (typeof name === 'undefined')
            throw this.throwError('pvpteam.search()', 'a name')

        return this.req('/pvpteam/search', Object.assign(params, { name }))
    }

    async get(id) {
        if (typeof id === 'undefined')
            throw this.throwError('pvpteam.get()', 'an ID')

        return this.req(`/pvpteam/${id}`)
    }
}



async function xivtext(str) {

    const xiv = new XIVAPI({
        cn: false,
        verbose: false
    })

    js = {
        //indexes: "item",
        lore: true,
        //limit: 10,
    }
    await xiv.search(str, js).then(j => { console.log(j) })
    // await xiv.data.content().then(j => { console.log(j.length) })
    // await xiv.data.list("Carry").then(j => { console.log(j.length) })
    // await xiv.data.get("Carry", "5").then(j => { console.log(j.length) })
    // await xiv.data.servers().then(j => { console.log(j.length) })
    // await xiv.data.datacenters().then(j => { console.log(j.length) })
    // await xiv.character.search("lalafell").then(j => { console.log(j) })
    // await xiv.character.get("8354659").then(j => { console.log(j) })
    // await xiv.freecompany.search("lalafell").then(j => { console.log(j) })
    // await xiv.freecompany.get("9236319885783474038").then(j => { console.log(j) })
    // await xiv.linkshell.search("lalafell", limit = 10).then(j => { console.log(j) })
    // await xiv.linkshell.get("8444249301407190").then(j => { console.log(j) })
    // await xiv.pvpteam.search("lalafell", limit = 10).then(j => { console.log(j) })
    // await xiv.pvpteam.get("2a703d3e5976aca396d387b645c9b8b86e420290").then(j => { console.log(j) })

    // jstext = {
    //     "body": {
    //         "query": {
    //             "bool": {
    //                 "must": [
    //                     {
    //                         "wildcard": {
    //                             "NameCombined_en": "*aiming*"
    //                         }
    //                     }
    //                 ],
    //                 "filter": [
    //                     {
    //                         "range": {
    //                             "ItemSearchCategory.ID": {
    //                                 "gt": "1"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         "range": {
    //                             "LevelItem": {
    //                                 "gte": "100"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         "range": {
    //                             "LevelItem": {
    //                                 "lte": "125"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         "from": 0,
    //         "size": 10,
    //         "sort": [
    //             {
    //                 "LevelItem": "desc"
    //             }
    //         ]
    //     }
    // }

}

export { XIVAPI }