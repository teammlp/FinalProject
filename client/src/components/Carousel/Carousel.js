<div className="seven columns">
<div className="screenshot-container">
  <div
    id="carouselExampleControls"
    className="carousel slide content"
    data-ride="carousel"
  >
    <a
      className="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      />
      <span className="sr-only">Previous</span>
    </a>
    <div className="carousel-inner">{this.profilesList()}</div>
    <a
      className="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      />
      <span className="sr-only">Next</span>
    </a>
  </div> 
      {/*end carousel slide content*/}
  <script>$('.carousel').carousel();</script>
</div>
  {/*end screenshot-container */}
</div>
  {/* end seven columns menu */}