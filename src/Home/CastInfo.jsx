
export default ({info, handleClose}) => {
  return ( 
    <dialog id="cast-modal" open>
      <article>
        <a href="#close" aria-label="Close" 
            className="close"
            data-target="cast-modal"
            onClick={handleClose}></a>
        <hgroup>
        <div style={{
          display:"flex",
          gap:'1rem'
        }}>
          <img style={{width:'200px'}} src={`images/${info.slug}.svg`} alt={info.name}/>
          <hgroup>
            <h1>{info.name}</h1>
            <p>{info.bio}</p>
          </hgroup>
        </div>
      </hgroup>
      </article>
    </dialog>
  )
}