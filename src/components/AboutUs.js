const About = () => {
  return (
    <>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b> Easy coding</b> 
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            Welcome to our education institution!
            Coding is the process of transforming ideas, solutions, and instructions into the language that the computer can understand – that is, binary-machine code. Coding is how humans are able to talk with computers.

            </div>
            <br>
            </br>
            <br>
            </br>
          </div>
          <center>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9qz1wrhw0syYpXnUAhxWVsbwL4ymE-rrpQ&usqp=CAU"></img><br></br>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09Q_aov1UAc9Bt5YqWd5fy3zRju_tqQx5bw&usqp=CAU"></img><br></br>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2p6T18IfMg7KZxkneJOV39VaQ33G6X1GWBQ&usqp=CAU"></img><br></br>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9qz1wrhw0syYpXnUAhxWVsbwL4ymE-rrpQ&usqp=CAU"></img><br></br>
          </center>
        </div>
       
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Address
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                UDUPI, <br></br>
                MANGALORE,<br></br>
               BANGALORE<br></br>
              </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Contact details
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Phone: 6364233068</strong>
              <br></br>
              <strong>Gmail: smithakunder@gmail.com</strong>
              <br></br>
            
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;