import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { CountryService } from '../../../demo/service/CountryService';
import { Demo } from '../../../types/types';
    

const FloatLabelDemo = () => {
    const [countries, setCountries] = useState<Demo.Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Demo.Country[]>([]);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState(new Date());
    const [value6, setValue6] = useState<any[]>([]);
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState<number | null>(null);
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState(null);
    const [value11, setValue11] = useState(null);
    const [value12, setValue12] = useState('');
     
      const [value13, setValue13] = useState('');
      const [horaapertura, setHoraApertura] = useState('');
       const [motivoconsulta, setMotivoConsulta] = useState('');
       const [enfermedadactual, setEnfermedadActual] = useState('');
       const [neurologico, setNeurologico] = useState('Niega');
        const [desneurologico, setDesNeurologico] = useState(null);
        const [organosentidos, setOrganSentidos] = useState('Niega');
        const [desorganosentidos, setDesOrganSentidos] = useState(null);
        const [osteomuscular, setOsteomuscular] = useState('Niega');
        const [desosteomuscular, setDesOsteomuscular] = useState('');
        const [cardiopulmonar, setCardioPulmonar] = useState('Niega');
        const [descardiopulmonar, setDesCardioPulmonar] = useState('');
        const [gastrointestinal, setGastrointestinal] = useState('Niega');
        const [desgastrointestinal, setDesGastrointestinal] = useState('');
         const [genitourinario, setGenitourinario] = useState('Niega');
        const [desgenitourinario, setDesGenitourinario] = useState('');
         const [endocrinoinmunologico, setEndocrinoInmunologico] = useState('Niega');
        const [desendocrinoinmunologico, setDesEndocrinoInmunologico] = useState('');
        const [pielanexos, setPielAnexos] = useState('Niega');
        const [despielanexos, setDesPielAnexos] = useState('');





        
       




    

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const revision_sistema = [
        { name: 'Niega', code: 'Niega' },
        { name: 'Refiere', code: 'Refiere' },
     
    ];

      const antecedentes = [
        { name: 'Niega', code: 'Niega' },
        { name: 'Refiere', code: 'Refiere' },
     
    ];
     

    useEffect(() => {
        CountryService.getCountries().then((countries) => {
            setCountries(countries);
        });
    }, []);

    const searchCountry = (event: AutoCompleteCompleteEvent) => {
        const filtered: Demo.Country[] = [];
        const query = event.query;
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        setFilteredCountries(filtered);
    };

    return (
        <div className="card">
            <h5>Consulta por Primera Vez</h5>
            <div className="grid p-fluid mt-3">
                <div className="field col-12 md:col-4">
                 <label htmlFor="hora_apertura">Hora de apertura</label>
                <Calendar showTime hourFormat="12" value={horaapertura} onChange={(e) => setHoraApertura(e.value)}></Calendar>
                
                </div>

                <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputTextarea id="motivo_consulta" rows={3} value={motivoconsulta} onChange={(e) => setMotivoConsulta(e.target.value)} autoResize></InputTextarea>
                        <label htmlFor="motivo_consulta">Motivode Consulta</label>
                    </span>
                </div>

              <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                        <InputTextarea id="textarea" rows={3} value={enfermedadactual} onChange={(e) => setEnfermedadActual(e.target.value)} autoResize></InputTextarea>
                        <label htmlFor="textarea">Enfermedad Actual</label>
                    </span>
                </div>
                

                        <div className="card">
  <h5>Revision por sistema</h5>
   <div className="grid p-fluid mt-3">
  


          
             
               
               <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={revision_sistema} value={neurologico} onChange={(e) => setNeurologico(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Neurológico</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desneurologico} onChange={(e) => setDesNeurologico(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Neurológico</label>
                    </span>
                </div>



                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={revision_sistema} value={organosentidos} onChange={(e) => setOrganSentidos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Órgano de los sentidos</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desorganosentidos} onChange={(e) => setDesOrganSentidos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Órgano de los sentidos </label>
                    </span>
                </div>
               <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="dropdown" options={revision_sistema} value={osteomuscular} onChange={(e) => setOsteomuscular(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="dropdown">Osteomuscular</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={desosteomuscular} onChange={(e) => setDesOsteomuscular(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Osteomuscular </label>
                    </span>
                </div>





                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="cardiopulmonar" options={revision_sistema} value={cardiopulmonar} onChange={(e) => setCardioPulmonar(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="cardiopulmonar">Cardiopulmonar</label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="descardiopulmonar" value={descardiopulmonar} onChange={(e) => setDesCardioPulmonar(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="descardiopulmonar"> Descripción Cardiopulmonar </label>
                    </span>
                 </div>

                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="gastrointestinal" options={revision_sistema} value={gastrointestinal} onChange={(e) => setGastrointestinal(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="gastrointestinal">Gastrointestinal</label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="des" value={desgastrointestinal} onChange={(e) => setDesGastrointestinal(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="des"> Descripción Gastrointestinal </label>
                    </span>
                </div>

                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="Genitourinario" options={revision_sistema} value={genitourinario} onChange={(e) => setGenitourinario(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="Genitourinario">Genitourinario </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desgenitourinario" value={desgenitourinario} onChange={(e) => setDesGenitourinario(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desgenitourinario"> Descripción Genitourinario  </label>
                    </span>
                </div>

              <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="Endocrino_inmunologico" options={revision_sistema} value={endocrinoinmunologico} onChange={(e) => setEndocrinoInmunologico(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="Endocrino_inmunologico">Endocrino-inmunológico </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="desendocrinoinmunologico" value={desendocrinoinmunologico} onChange={(e) => setDesEndocrinoInmunologico(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="desendocrinoinmunologico"> Descripción Endocrino-inmunológico  </label>
                    </span>
                </div>


                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Piel y anexos   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Piel y Anexos</label>
                    </span>
                </div>

            </div>
         </div>




           <div className="card">
           <h5>Antecedentes</h5>
           <div className="grid p-fluid mt-3">           
                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="antecedentes_medicos" options={antecedentes} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Antecedentes Medicos  </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Antecedentes Medicos
                        </label>
                    </span>
                </div>


                       
                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Antecedentes Familiares  </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Antecedentes Familiares</label>
                    </span>
                </div>
       
                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos"> Antecedentes Alopecia  </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Antecedentes Alopecia</label>
                    </span>
                </div>


               
                   <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Antecedentes Quirúrgicos   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Antecedentes Quirúrgicos</label>
                    </span>
                </div>


                 <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Antecedentes Hospitalarios   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Hospitalarios</label>
                    </span>
                </div>



 

               


              <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Antecedentes Antecedentes Alérgicos   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Antecedentes Alérgicos</label>
                    </span>
                </div>
                 




              <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Antecedentes Antecedentes Farmacológicos   </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Antecedentes Farmacológicos</label>
                    </span>
                </div>
                 

                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <Dropdown id="pielanexos" options={revision_sistema} value={pielanexos} onChange={(e) => setPielAnexos(e.value)} optionLabel="name"></Dropdown>
                        <label htmlFor="pielanexos">Antecedentes Toxicos  </label>
                    </span>
                </div>

                <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Descripción Antecedentes Toxicos</label>
                    </span>
                </div>







                  <div className="field col-12 md:col-3">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" value={despielanexos} onChange={(e) => setDesPielAnexos(e.value)} suggestions={filteredCountries} completeMethod={searchCountry} field="name"></AutoComplete>
                        <label htmlFor="autocomplete"> Tipo de Cicatrización</label>
                    </span>
                </div>




           </div>
           </div>
             


                
                    
            </div>
            </div>
        
    );
};

export default FloatLabelDemo;
