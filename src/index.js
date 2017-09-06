import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const data= {

    allOffers: [
      {
        id: "cj3aallvwfh1w0165798znuqa",
        price: 80,
        deductible: 3,
        company: {
          id: "cj3aakw7zfgyx0165stccde70",
          name: "McLaughlin-Hoppe"
        }
      },
      {
        id: "cj3aaluu1fh4p0165almifr4i",
        price: 60,
        deductible: 5,
        company: {
          id: "cj3aaitarfuls01767wrxmykf",
          name: "Gusikowski-Schneider"
        }
      },
      {
        id: "cj3aam2idf8bf0132xtptxvpf",
        price: 40,
        deductible: 3,
        company: {
          id: "cj3aaih45f1ee0157fq8acf7b",
          name: "Glover, Yundt and Mertz"
        }
      },
      {
        id: "cj3aamclvfh7k0165fa483fa1",
        price: 30,
        deductible: 7,
        company: {
          id: "cj3aaj8wafuon0176a9innrjn",
          name: "Leannon LLC"
        }
      },
      {
        id: "cj3aamiwofvmn0176a1tjgis4",
        price: 80,
        deductible: 5,
        company: {
          id: "cj3aakw7zfgyx0165stccde70",
          name: "McLaughlin-Hoppe"
        }
      },
      {
        id: "cj3aamrjmfhaf01657i3kb65r",
        price: 35,
        deductible: 7,
        company: {
          id: "cj3aaih45f1ee0157fq8acf7b",
          name: "Glover, Yundt and Mertz"
        }
      },
      {
        id: "cj3aan0v0fhd80165nrrepgtv",
        price: 57,
        deductible: 5,
        company: {
          id: "cj3aaj8wafuon0176a9innrjn",
          name: "Leannon LLC"
        }
      },
      {
        id: "cj3aandyvf3t00157vybpyrzt",
        price: 129,
        deductible: 0,
        company: {
          id: "cj3aaih45f1ee0157fq8acf7b",
          name: "Glover, Yundt and Mertz"
        }
      }
    ],
    allCompanies: [
      {
        id: "cj3aaih45f1ee0157fq8acf7b",
        name: "Glover, Yundt and Mertz",
        imageUrl: "http://placehold.it/280x150?text=Glover, Yundt and Mertz"
      },
      {
        id: "cj3aaitarfuls01767wrxmykf",
        name: "Gusikowski-Schneider",
        imageUrl: "http://placehold.it/280x150?text=Gusikowski-Schneider"
      },
      {
        id: "cj3aaj8wafuon0176a9innrjn",
        name: "Leannon LLC",
        imageUrl: "http://placehold.it/280x150?text=Leannon LLC"
      },
      {
        id: "cj3aakw7zfgyx0165stccde70",
        name: "McLaughlin-Hoppe",
        imageUrl: "http://placehold.it/280x150?text=McLaughlin-Hoppe"
      }
    ]
  }


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
