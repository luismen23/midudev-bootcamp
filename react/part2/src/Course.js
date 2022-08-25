
export const Course = ({name, parts}) => {
    return (
        <div >
            <h1>{name}</h1>
            {
            parts.map((part)=>{
                return <p key={part.id}>{part.name} {part.exercises}</p>
            })
            }
        </div>
        )
}

