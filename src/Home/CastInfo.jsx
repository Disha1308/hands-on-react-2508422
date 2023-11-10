
export default ({info, handleClose, handleNext}) => {
  return ( 
    <dialog id="cast-modal" open>
      <article>
        <a  aria-label="Close" 
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
            <button className="outline" onClick={handleNext}>View Next</button>
          </hgroup>
        </div>
      </hgroup>
      </article>
    </dialog>
  )
}