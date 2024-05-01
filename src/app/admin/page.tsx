export default function Page() {

    return <div className="px-20">
        <div className="text-left mt-20">
            <h1 className="font-bold text-xl">Administrar</h1>
            <p>Estas en la seccion de administracion</p>
        </div>
        <div>
            <h2>Skill</h2>
            <form>
                <input type="text" placeholder="Nombre del skill" />
                <button>Crear</button>
            </form>
        </div>
    </div>
}