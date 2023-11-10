
export default (props) => {
  return (
    <article>
      <hgroup>
        <div style={{
          display:"flex",
          gap:'1rem'
        }}>
          <img style={{width:'200px'}} src={`images/${props.info.slug}.svg`} alt={props.info.name}/>
          <hgroup>
            <h1>{props.info.name}</h1>
            <p>{props.info.bio}</p>
          </hgroup>
        </div>
      </hgroup>
    </article>
  )
}