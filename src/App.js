import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { tab } from './data'

function Main() {
    const [frommembres, setfrommembres] = useState(tab);
    const [indice, setindice] = useState(1);
    const [nomcomplet, setnomcomplet] = useState();
    const [all, setall] = useState([]);
    const [filtred, setfiltred] = useState([]);


    const next = (status) => {

        if (indice == 10) {
            setfiltred((old) => [{ name: nomcomplet, status }, ...old])
            setnomcomplet(frommembres[indice - 1].prenom + " " + frommembres[indice - 1].nom);
            setall((old) => [{ name: nomcomplet, status }, ...old])
            document.getElementById('presence').innerHTML = ""
        } else {
            if (status == "go") {
                setindice(indice + 1);
                setnomcomplet(frommembres[indice].prenom + " " + frommembres[indice].nom);

            } else {
                setfiltred((old) => [{ name: nomcomplet, status }, ...old])
                setindice(indice + 1);
                setnomcomplet(frommembres[indice].prenom + " " + frommembres[indice].nom);
                setall((old) => [{ name: nomcomplet, status }, ...old])

            }
        }
    }

    const filtre = (status) => {
        if (status == "Tous") {
            setfiltred(all)
        } else {

            const res = all.filter(element => element.status == status);

            setfiltred(res);
        }
    }
    return (
        <div>
            <div>
            <div id="presence">
                    <div>
                        <h4 style={{color:'black', margintop:'20px'}}> {nomcomplet}  </h4>
                    </div>
                    <div id="buttons"  >
                        <Button onClick={() => next("Present")} variant="success">Present</Button>
                        <Button onClick={() => next("Excusé")} variant="warning">Excusé</Button>
                        <Button onClick={() => next("Abscent")} variant="danger">Abscent</Button>
                    </div>
                </div>
                <div>
                    <div >
                        <ButtonGroup id='buttons' size="sm" >
                            <Button onClick={() => filtre("Tous")}>Tous</Button>
                            <Button onClick={() => filtre("Abscent")}>Abscent</Button>
                            <Button onClick={() => filtre("Present")} >Present</Button>
                        </ButtonGroup>

                    </div>
                </div>
                <div>
                    <ul>
                        {filtred && filtred.map((element, indice) =>
                            <div key={indice} className="card card-body mb-1">
                                <div>
                                    <div >
                                        <h6 style={{ marginBottom: 0 }}>
                                            {element.name}
                                        </h6>
                                    </div>
                                    <div style={{ float: 'right' }}>
                                        <Button variant="secondary">
                                            {element.status}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main
