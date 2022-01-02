import React from 'react';
function About(props) {
  return (
    <>
      <div className="container mt-5">
                <h1 className='text-center'>Project Detail</h1>
                <p>This project developed using <a href="https://disneyapi.dev/" target="_blank">DisneyAPI</a>.</p>

                <h4>Used Technologies</h4>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>React Router Dom</li>
                </ul>

                <h4>Run</h4>
                <div class="card">
                    <div class="card-body fw-bold">
                        git clone https://github.com/busragayret/react-project-with-API.git <br />
                        <br />
                        $ cd react-project-with-API <br />
                        <br />
                        $ npm install <br />
                        $ npm start <br />

                    </div>
                </div>

            </div>
    </>
  );
}
export default About;