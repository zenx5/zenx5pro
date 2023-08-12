class Component {

    constructor(path, other){
        this.other = other;
        this.path = path;
        this.template = '';
    }

    async get(){
        const response = await fetch( this.path );
        const template = await response.text();
        return {
            ...this.other,
            template
        }
    }
}