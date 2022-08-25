export const Note = ({ categories = [], content, date }) => { 
    //asi puedo printear el valor de categories que solo esta en el primer elemento de notes, 
    //colocandole un valor por defecto ("[]") cuando lo paso como prop en Note
    return (
      <li> 
          <p>{content}</p>
          <small><time>Date: {date}</time></small>
          {
            categories.map((category) => {
                return <p key={category}><strong>{category}</strong></p>
            } )
          }
      </li>
    );
  };

// export default Note; //puedo exportarlo de esta forma o de la forma nombrada
// la cual se coloca el export antes de componente Note, y usar las llaves en App.js