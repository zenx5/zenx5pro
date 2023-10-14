/**
 * 
 * @param {object} langs 
 * 
 */

function Lang( langs ){
    this._langs = langs
    this.currentLang = langs[ Object.keys(langs)[0] ]

    this.changeLang = function(key) {
        this.currentLang = this._langs[ key.toLowerCase() ]
    }

    this.getLang = function( tag ) {
        return this._langs[ tag.toLowerCase() ]
    }

    this.getListLang = function() {
        return Object.keys(this._langs).map( keyLang => {
            const keyLangLowerCase = keyLang.toLowerCase();
            const firstLetterUpperCase = keyLangLowerCase.slice(0,1).toUpperCase();
            const keyLangEndPart = keyLangLowerCase.slice(1);

            return firstLetterUpperCase + keyLangEndPart;
        })
    }

}

const LangConfig = new Lang({
    'en':en,
    'es':es
})