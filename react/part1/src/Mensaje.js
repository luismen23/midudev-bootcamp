                //asi accedemos a los props o params de un componente
const Mensaje = (props) => { // puedo crear componentes(funciones), para luego usarla en mi JSX principal
    return <h1 style={{color: props.color}}>{props.message}</h1>
  }

  export default Mensaje