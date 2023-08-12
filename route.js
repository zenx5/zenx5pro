class Route{
    static async create(path, template){
        return {
            path,
            component: await template.get()
        }
    }
}